const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ตั้งค่า CORS เพื่อให้รองรับการเรียกจาก frontend ที่ deploy บน Netlify
const corsOptions = {
  origin: 'https://ratchanon-portfolio.netlify.app', // URL ของ frontend ที่ deploy
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // ใช้ CORS middleware

// route สำหรับส่งข้อความไปยัง LINE Notify
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

// เริ่มต้น server
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
