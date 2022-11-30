const jsonServer = require("json-server");
const auth = require("json-server-auth");
const moment = require("moment");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({
  static: "./build",
});

server.db = router.db;
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = moment().valueOf();
    req.body.updatedAt = moment().valueOf();
  }

  if (req.method === "PUT") {
    req.method = "PATCH";
  }

  if (req.method === "PATCH") {
    req.body.updatedAt = moment().valueOf();
  }

  next();
});

server.use(auth);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});
