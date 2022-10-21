const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const { PORT = 4200 } = process.env;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
