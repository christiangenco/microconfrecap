const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const docToFile = doc => {
  const filename = `posts/${doc.slug}.md`;

  const frontmatter = `
---
title: ${doc.title}
speaker: ${JSON.stringify(doc.speaker)}
conference: ${doc.conference}
isPublic: ${doc.isPublic}
---

  `.trim();

  let body = frontmatter + "\n\n" + doc.body;

  return { filename, body };
};

const fileToDoc = filename => {
  const content = fm(fs.readFileSync(filename, { encoding: "utf8" }));

  let slug = path.basename(filename, path.extname(filename));
  const doc = { ...content.attributes, body: content.body, slug, id: slug };

  return doc;
};

const fetch = () => {
  db
    .collection("posts")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const file = docToFile({ ...doc.data(), slug: doc.id });
        fs.writeFileSync(file.filename, file.body);
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
};

// fetch();

console.log("watching...");
fs.watch("posts", (event, filename) => {
  // filename might be null if file was deleted
  const doc = fileToDoc("posts/" + filename);

  const body = doc.body;
  if (doc.id !== "_notes") delete doc.body;

  db
    .collection("posts")
    .doc(doc.id)
    .set({ ...doc, updatedAt: new Date() }, { merge: true })
    .catch(err => console.log(`error: ${err}`));

  if (doc.id !== "_notes")
    db
      .collection("bodies")
      .doc(doc.id)
      .set({ body, updatedAt: new Date() }, { merge: true })
      .catch(err => console.log(`error: ${err}`));

  console.log(`${new Date().toISOString()} updating ${filename}`);
});
