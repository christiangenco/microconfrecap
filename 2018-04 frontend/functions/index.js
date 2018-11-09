// curl -H "User-Agent: Facebot" https://microconf.gen.co/rob-walling
// curl -H "User-Agent: Facebot" https://microconf.gen.co/book/13
// curl -H "User-Agent: Facebot" http://localhost:5000/rob-walling?img=https%3A%2F%2Fwww.microconf.com%2Fgrowth%2Fwp-content%2Fuploads%2Fsites%2F4%2F2018%2F04%2FJustine_Mares_Headshot-262x272.png

const admin = require("firebase-admin");
const functions = require("firebase-functions");
const fs = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter();
const md = text => converter.makeHtml(text);

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const template = ({
  title,
  url,
  description,
  image,
  speaker,
  date,
  updatedAt,
  body,
}) => {
  // <meta property="og:image:width" content="99" />
  // <meta property="og:image:height" content="99" />
  // <meta property="twitter:image:alt" content="" />
  // <meta property="article:author" content="https://www.nytimes.com/by/ian-austen" />

  let fullTitle = `${title}`;
  if (speaker && speaker.name) fullTitle += ` by ${speaker.name}`;

  let fullDescription = description || "Microconf 2018 talk recap";

  let fullImage = image || "https://microconf.gen.co/microconf.jpg";

  return `<html><head>
    <title>${fullTitle}</title>
    <meta property="og:type" content="article" />
    <meta property="article:section" itemprop="articleSection" content="Business" />
    <meta property="article:published" itemprop="datePublished" content="${date}" />
    <meta property="article:modified" itemprop="dateModified" content="${updatedAt}" />

    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${fullDescription}" />
    <meta property="og:url" content=${url} />
    <meta
      property="og:image"
      content="${fullImage}"
    />

    <meta name="twitter:site" value="@microconf" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${fullTitle}" />
    <meta property="twitter:description" content="${fullDescription}" />
    <meta property="twitter:image" content="${fullImage}" />
    <meta name="twitter:card" value="summary_large_image" />

  </head><body><h1>${fullTitle}</h1>${md(body)}</body></html>`;
};

const generateScrapablePage = (path, query) => {
  return db
    .collection("posts")
    .doc(path)
    .get()
    .then(postDoc => {
      return db
        .collection("bodies")
        .doc(path)
        .get()
        .then(bodyDoc => {
          const post = postDoc.data();
          post.body = bodyDoc.data().body;
          post.url = `https://microconf.gen.co${path}`;
          if (query && query.img) post.image = query.img;
          return template(post);
        });
    });
};

const generateScrapableBook = path => {
  let imageIndex = 1;
  const match = path.match(/book\/(\d+)/);
  if (match && match[1]) imageIndex = Number(match[1]);
  imageIndex %= 16;

  const image = `https://microconf.gen.co/covers/${imageIndex}.jpg`;
  return template({
    title: "Microconf 2018 Recap Book",
    url: "https://microconf.gen.co",
    description:
      "Free beautiful PDF eBook of notes from every MicroConf 2018 Starter and Growth talk – both Speaker and Attendee. Want a copy?",
    image,
    speaker: { name: "Christian Genco", twitter: "cgenco" },
    date: new Date(),
    updatedAt: new Date(),
  });
};

exports.host = functions.https.onRequest((req, res) => {
  const userAgent = req.headers["user-agent"];

  if (
    userAgent.startsWith("facebookexternalhit/1.1") ||
    userAgent === "Facebot" ||
    userAgent.startsWith("Twitterbot")
  ) {
    if (req.path.indexOf("/book/") === 0) {
      return res.status(200).send(generateScrapableBook(req.path));
    } else {
      generateScrapablePage(req.path, req.query)
        .then(content => {
          return res.status(200).send(content);
        })
        .catch(err => {
          return res.status(500).send(JSON.stringify(err));
        });
    }
  } else {
    return res.status(200).send(fs.readFileSync("./index.html").toString());
  }
});
