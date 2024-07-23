const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hallo ich bin hamza, wo ist diene name?"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
