// gather up all the ../posts/*.md talks, parse their frontmatter,
// and stick it all in one clean posts.json file

const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
const _glob = require("glob");

const glob = (path, options) => {
  return new Promise((resolve, reject) => {
    _glob(path, options, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
};

const run = async () => {
  const filenames = await glob("../posts/*.md");
  const posts = filenames.map(filename => {
    const content = fm(fs.readFileSync(filename, { encoding: "utf8" }));
    return { ...content.attributes, body: content.body };
  });
  console.log(Object.keys(posts[2]));
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
};
run();
