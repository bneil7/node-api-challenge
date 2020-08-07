const express = require("express");
const helmet = require("helmet");
const customMW = require("./middleware/custom-mw.js");

const server = express();

const projRouter = require("./routers/projects-router.js");
const actRouter = require("./routers/actions-router.js");

server.use(express.json()); // GLOBAL MW
server.use(helmet()); // FREE SECURITY
server.use(customMW.logger);

server.get("/", (req, res) => {
  res.send("Node API Sprint Challenge");
});

server.use("/api/projects", projRouter);
server.use("/api/actions", actRouter);

module.exports = server;
