const express = require("express");

const app = express();

// Mevcut IP tespit uç noktası
app.get("/myip", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  res.json({ ip });
});

// Yeni eklenen Ping uç noktası
app.get("/ping", (req, res) => {
  // 200 OK durum kodu ile basit bir mesaj döner
  res.status(200).send("pong");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Sunucu " + PORT + " portunda çalışıyor.");
});
