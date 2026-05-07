const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

// Allow TurboWarp / browser to connect
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.send("AI server is running");
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  const message = req.body.message;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: message }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    console.log(err);
    res.json({ reply: "Error talking to AI" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running on port " + port));
