const functions = require("firebase-functions");

const generateScrapablePage = path => {
  return `<html><head><meta property="og:title" content="Microconf Recap 2018"></head><body>{path}</body></html>`;
};

exports.host = functions.https.onRequest((req, res) => {
  var userAgent = req.headers["user-agent"];
  if (
    userAgent.startsWith("facebookexternalhit/1.1") ||
    userAgent === "Facebot" ||
    userAgent.startsWith("Twitterbot")
  ) {
    res.status(200).send(generateScrapablePage(req.path));
  } else {
    res.status(200).send(fs.readFileSync("./hosting/index.html").toString());
  }
});
