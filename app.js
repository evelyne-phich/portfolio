const express = require("express");

const router = require("./router");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(router);

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
