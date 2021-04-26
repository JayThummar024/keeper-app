const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//connection to the mongo database

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected");
    }
  }
);

require("./models/note");
const Note = mongoose.model("Note");

app.use(require("./routes/notesRouts"));

//server running

app.listen(5000, function () {
  console.log("server is running on port 5000.");
});
