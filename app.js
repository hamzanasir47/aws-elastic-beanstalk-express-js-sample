const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Hallo ich bin hamza. ich prufe das pipeline. das ist meine erste projekt mit aws pipeline. ich lerne auch german"
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
