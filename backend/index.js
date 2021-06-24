const express = require("express"); //import express for create api
const cors = require("cors"); // import cors for bypass cors error for same url domain
require("dotenv").config(); //for get data from .env file

const app = express();
const PORT = process.env.PORT_OPEN || 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("It's a compiler backend part.");
});

app.listen(PORT, () => console.log(`Port open at: http://localhost:${PORT}`));
