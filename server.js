const express = require("express");
const app = express();

app.use(express.json());

/* ---- Store latest readings in memory ---- */
let latestData = null;

app.get("/", (req, res) => {
  res.send("Water Quality API Running");
});

/* ---- POST route (ESP32 sends data here) ---- */
app.post("/api/data", (req, res) => {
  latestData = req.body;

  console.log("Received Data:");
  console.log(latestData);

  res.json({
    status: "success",
    message: "Data received successfully"
  });
});

/* ---- NEW GET route to view data in browser ---- */
app.get("/api/data", (req, res) => {
  if (latestData) {
    res.json(latestData);
  } else {
    res.json({ message: "No data received yet" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
