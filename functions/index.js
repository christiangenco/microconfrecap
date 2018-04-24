const admin = require("firebase-admin");
const functions = require("firebase-functions");
const fs = require("fs");

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

  </head><body>Hello robot crawler!</body></html>`;
};

const generateScrapablePage = path => {
  return db
    .collection("posts")
    .doc(path)
    .get()
    .then(doc => {
      const post = doc.data();
      post.url = `https://microconf.gen.co${path}`;
      return template(post);
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

// curl -H "User-Agent: Facebot" https://microconf.gen.co/fomo
// curl -H "User-Agent: Facebot" https://microconf.gen.co/book/13

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
      generateScrapablePage(req.path)
        .then(content => {
          return res.status(200).send(content);
        })
        .catch(err => {
          return res.status(500).send(JSON.stringify(err));
        });
    }
  } else {
    res.status(200).send(fs.readFileSync("./index.html").toString());
  }
});
