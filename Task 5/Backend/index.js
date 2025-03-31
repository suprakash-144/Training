const express = require("express");
const dbConnect = require("./Config/dbConnect");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const Authrouter = require("./Routes/Authroute");
const Todorouter = require("./Routes/Todoroute");
const { notFound, errorHandler } = require("./Middlewares/errorHandler");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const swagger = require("./swagger");
dbConnect();

// ?middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies and authorization headers
  })
);
//  sawgger setup
swagger(app);

// Routes
app.use("/todo", Todorouter);
app.use("/", Authrouter);

//error handling
app.use(notFound);
app.use(errorHandler);
// server config
app.listen(process.env.PORT, () => {
  console.log(`Server is running  at  http://localhost:${process.env.PORT}/`);
  console.log(
    `Swagger is running  at http://localhost:${process.env.PORT}/docs`
  );
});
