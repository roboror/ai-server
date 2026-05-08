const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("AI server running");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  res.json({
    reply: "You said: " + message
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
