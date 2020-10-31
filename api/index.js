const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const user = require("./routes/user");
const result = require("./routes/result");

require("dotenv").config();
require("./db/connect");

app.use(cors());
const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/assets", express.static("assets"));
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/user", user.routes);
app.use("/result", result.routes);

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});

app.listen(port, host, () => {
  console.log("Running Server at http://" + host + ":" + port);
});
