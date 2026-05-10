const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SERVER OK");
});

app.post("/chat", (req, res) => {
  res.json({ reply: "test ok: " + req.body.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("running");
});
