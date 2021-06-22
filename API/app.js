const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
//Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("HomePage");
});

mongoose.connect(
  "mongodb+srv://sebastian89:12345@cluster0.69mix.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

app.listen(5000);
