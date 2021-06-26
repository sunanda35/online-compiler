const express = require("express"); //import express for create api
const fs = require("fs"); //import fs for file manupulate
const { spawn } = require("child_process");
const cors = require("cors"); // import cors for bypass cors error for same url domain
const { stdout } = require("process");
require("dotenv").config(); //for get data from .env file

const app = express();
const PORT = process.env.PORT_OPEN || 3000;

app.use(cors()); // bypass browser cors error
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
); // for all type of api request

app.get("/", (req, res) => {
  res.send("It's a compiler backend part.");
}); //test get api create

app.post("/api/compile/", async (req, res, next) => {
  const language = req.body.language;
  const code = `#include<iostream>
using namespace std;

int main()
{
    cout<<"OOO mother chod";
    return 0;
}`;
  try {
    fs.writeFileSync("./utils/helo.cpp", code, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });

    let results, error;
    var ls = await spawn("g++ ./utils/helo.cpp && ./a.out", { shell: true });

    ls.stdout.on("data", (data) => {
      results = `${data}`;
    }); //output of c++ code

    ls.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
      error = `${data}`;
    }); //error of code
    ls.on("error", (error) => {
      error = `${data}`;
    }); //error

    // ls.stdin.pipe(res);

    ls.on("close", (close) => {
      res.status(200).json({
        language: language,
        code: code,
        output: results,
        err: error,
      });
    }); //completed code execution
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Port open at: http://localhost:${PORT}`);
}); // create a server using port
