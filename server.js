const express = require("express");

const app = express();

app.use(express.json());

// CORS (lets TurboWarp talk to it)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// test route
app.get("/", (req, res) => {
  res.send("AI SERVER IS RUNNING");
});

// chat route (SAFE TEST VERSION)
app.post("/chat", (req, res) => {
  const message = req.body.message;

  res.json({
    reply: "You said: " + message
  });
});

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
