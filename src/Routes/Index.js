const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json()); // for post request

app.use(express.urlencoded({ extended: true }));

const SIGNUP = [];
const LOGIN = [];

app.get("/", (req, res) => {
  res.render("Login.jsx");
});

app.post("/signup", (req, res) => {
  let user = req.body;
  let foundUser = SIGNUP.find(
    (s) => s.username === user.username && s.password === user.password
  );
  if (foundUser) {
    res.status(403).json({ message: "User already exist !" });
  } else {
    SIGNUP.push(user);
    res.redirect("/").json({ message: "User signup successfully" });
  }
});

app.post("/", (req, res) => {
  let user = req.headers;
  let dataFound = SIGNUP.find(
    (s) => s.username === user.username && s.password === user.password
  );
  if (dataFound) {
    res.json({ message: "Login successfully..." });
    res.redirect("/home");
    LOGIN.push(user);
  } else {
    res.status(403).json({ message: "Data not Found" });
  }
});

app.get("/home", (req, res) => {
  res.render("Home.jsx");
});

app.listen(() => {
  console.log(`port listening on ${port}`);
});
