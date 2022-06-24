// CommonJS Module
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.use(express.json());

require("./database/databaseConnnection");

app.use(require("./routes/customerRoute"));

app.listen(90, () => {
  console.log("Listening at port 90.");
});
