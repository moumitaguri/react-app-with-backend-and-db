const express = require("express");
const bodyParser = require("body-parser");

const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 8000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "guri@4874",
  database: "faker"
});

connection.connect();

app.use(express.static("client/build"));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/userCount", (req, res) => {
  const qry = "SELECT COUNT(*) AS count FROM users";
  let count;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    count = result[0].count;
    res.send(`We have ${count} users, already joined!!`);
  });
});

app.post("/join", (req, res) => {
  const email = req.body.email;

  const qry = `INSERT INTO users(email) VALUES("${email}")`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
