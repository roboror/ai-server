const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.send("AI server running");
});

app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    console.log(err);

    res.json({
      reply: "Error talking to AI"
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
