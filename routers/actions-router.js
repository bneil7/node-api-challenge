const express = require("express");
const ActDB = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  ActDB.get()
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // gets all actions

router.get("/:id", (req, res) => {
  const id = req.params.id;

  ActDB.get(id)
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // gets actions by ID

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  ActDB.remove(id)
    .then(action => {
      res.status(200).json({ message: `Action with id# ${id} was deleted` });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // deletes action by ID

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  ActDB.update(id, body)
    .then(action => {
      res.status(200).json({ body });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
}); // edits and updates action by ID

module.exports = router;
