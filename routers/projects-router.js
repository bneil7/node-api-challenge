const express = require("express");
const ProjDB = require("../data/helpers/projectModel");
const ActDB = require("../data/helpers/actionModel");

const customMW = require("../middleware/custom-mw.js");

const router = express.Router();

router.post("/:id/actions", customMW.validateProjID, (req, res) => {
  const body = req.body;

  ActDB.insert(body)
    .then(action => {
      res.status(201).json({ action });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // posts new action to project by project ID

router.post("/", (req, res) => {
  const body = req.body;

  ProjDB.insert(body)
    .then(proj => {
      res.status(201).json({ proj });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // posts new project to existing list of projects

router.get("/", (req, res) => {
  ProjDB.get()
    .then(proj => {
      res.status(200).json({ proj });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // gets all projects

router.get("/:id", (req, res) => {
  const id = req.params.id;

  ProjDB.get(id)
    .then(proj => {
      res.status(200).json({ proj });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // gets projects by ID

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  ProjDB.remove(id)
    .then(proj => {
      res.status(200).json({ message: `Project with id# ${id} was deleted` });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // deletes project by ID

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  ProjDB.update(id, body)
    .then(proj => {
      res.status(200).json({ proj });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // edits and updates project by ID

module.exports = router;
