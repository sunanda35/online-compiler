const express = require("express"); //import express for create api
const cors = require("cors"); // import cors for bypass cors error for same url domain
require("dotenv").config(); //for get data from .env file

const app = express();
const PORT = process.env.PORT_OPEN || 3000;

app.use(cors()); // bypass browser cors error
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
); // for all type of api req

app.get("/api/", (req, res) => {
  res.send("It's a compiler backend part.");
}); //test get api create
app.post("/api/compile/", (req, res, next) => {
  const language = req.body.language;
  const code = req.body.code;
  res.send({
    language: language,
    code: code,
  });
});

app.listen(PORT, () => {
  console.log(`Port open at: http://localhost:${PORT}`);
}); // create a server using port
