const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const docToFile = doc => {
  const filename = `posts/${doc.slug}.md`;

  const frontmatter = `
---
id: ${doc.id}
title: ${doc.title}
author: ${JSON.stringify(doc.author)}
isPublic: ${doc.isPublic}
---

  `.trim();

  let body = frontmatter + "\n\n" + doc.body;

  return { filename, body };
};

const fileToDoc = filename => {
  const content = fm(fs.readFileSync(filename, { encoding: "utf8" }));

  let slug = path.basename(filename, path.extname(filename));
  const doc = { ...content.attributes, body: content.body, slug };

  return doc;
};

const fetch = () => {
  db
    .collection("posts")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, "=>", doc.data());
        const file = docToFile({ ...doc.data(), id: doc.id });
        fs.writeFileSync(file.filename, file.body);
        // console.dir(fileToDoc(file.filename));
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
};

fs.watch("posts", function(event, filename) {
  console.log("event is: " + event);
  if (filename) {
    console.log("filename provided: " + filename);
  } else {
    console.log("filename not provided");
  }
});
