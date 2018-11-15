const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const pathMatch = require("path-match");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route("/:slug");
const bookRoute = route("/book/:coverIndex");

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    if (pathname === "/") {
      handle(req, res);
      return;
    }

    const bookParams = bookRoute(pathname);
    if (bookParams !== false) {
      app.render(req, res, "/book", Object.assign(bookParams, query));
      // res.redirect(301, to)
    }

    const params = match(pathname);
    app.render(req, res, "/post", Object.assign(params, query));
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
