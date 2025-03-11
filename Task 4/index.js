const express = require("express");
const dbConnect = require("./Config/dbConnect");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const Authrouter = require("./Routes/Authroute");
const { notFound, errorHandler } = require("./Middlewares/errorHandler");
const app = express();
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", Authrouter);

//error handling
app.use(notFound);
app.use(errorHandler);
// server config
app.listen(process.env.PORT, () => {
  console.log(`Server is running  at PORT ${process.env.PORT}`);
});
