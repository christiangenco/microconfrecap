const fs = require("fs");
const path = require("path");
const showdown = require("showdown");
const _glob = require("glob");

const glob = (path, options) => {
  return new Promise((resolve, reject) => {
    _glob(path, options, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
};

const converter = new showdown.Converter({ metadata: true });
// delete remarkParse.Parser.prototype.blockTokenizers.indentedCode;
const md = text => {
  return { ...converter.getMetadata(), html: converter.makeHtml(text) };
};

const renderPost = post => {
  return `<h1>${post.title}</h1>` + post.html;
};

const run = async () => {
  const filenames = await glob("../posts/*.md");
  const posts = filenames.map(filename => {
    const content = fs.readFileSync(filename, { encoding: "utf8" });
    return md(content);
  });

  // console.log(posts[2]);

  const head = `<html><head><title>Microconf Recap 2018</title><link rel="stylesheet" href="../style.css"></head><body>`;
  const content = posts.reduce((acc, post) => acc + renderPost(post));
  const tail = "</body></html>";

  // fs.writeFileSync("build/index.html", head + content + tail);
  fs.writeFileSync("build/index.html", head + renderPost(posts[2]) + tail);
};
run();
