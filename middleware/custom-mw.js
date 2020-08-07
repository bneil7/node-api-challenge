const ProjDB = require("../data/helpers/projectModel");

module.exports = {
  logger,
  validateProjID,
};

function logger(req, res, next) {
  console.log(
    `At [${new Date().toISOString()}] a ${req.method} request was made to ${
      req.url
    } `
  );

  next();
}

function validateProjID(req, res, next) {
  const id = req.params.id;

  ProjDB.get(id)
    .then(proj => {
      if (proj) {
        next();
      } else {
        res.status(400).json({ errorMessage: "Project ID not found." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}
