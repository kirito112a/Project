const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000; // เปลี่ยนพอร์ตให้เป็น environment variable
const originURL = process.env.FRONTEND_URL || 'http://localhost:3000'; // ใช้ environment variable

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: originURL, // ใช้ environment variable
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post("/send-line-notify", async (req, res) => {
  const { token, message } = req.body;
  try {
    const response = await axios.post("https://notify-api.line.me/api/notify", 
      `message=${message}`, 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error sending to LINE Notify:", error);
    res.status(500).json({ error: "Failed to send message to LINE Notify" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
