const db = require("./firebase");

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    const snap = await db
      .collection("posts")
      .orderBy("date")
      .get();

    const paths = { "/": { page: "/" } };

    snap.forEach(
      doc => (paths["/" + doc.id] = { page: "/post", query: { slug: doc.id } })
    );

    return paths;
  },
};
