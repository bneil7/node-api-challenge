const ProjDB = require("../data/helpers/projectModel");
const ActDB = require("../data/helpers/actionModel");

module.exports = {
  logger,
  validateProjectId,
};

function logger(req, res, next) {
  console.log(
    `At [${new Date().toISOString()}] a ${req.method} request was made to ${
      req.url
    } `
  );

  next();
}

function validateProjectId(req, res, next) {}
