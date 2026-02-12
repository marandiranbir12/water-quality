const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Water Quality API Running");
});

app.post("/api/data", (req, res) => {
  console.log("Received Data:");
  console.log(req.body);

  res.json({
    status: "success",
    message: "Data received successfully"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
