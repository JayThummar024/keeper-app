const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = mongoose.model("Note");

router.get("/", (req, res) => {
  Note.find()
    .then((notes) => {
      res.json({ notes });
    })
    .catch((err) => console.log(err));
});

router.post("/createpost", (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }

  const note = new Note({
    title,
    body,
  });
  note
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete(`/delete/:id`, (req, res) => {
  Note.findOneAndRemove({ _id: req.params.id })
    .then(result=>{res.json(result)})
    .catch((err) => console.log(err));
});

module.exports = router;
