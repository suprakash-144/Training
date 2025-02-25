const express = require("express");
const dbConnect = require("./Config/dbConnect");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running  at PORT ${process.env.PORT}`);
});
