const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/data", (req, res) => {
    console.log("Received Data:");
    console.log(req.body);

    res.json({ status: "success", message: "Data received" });
});

app.get("/", (req, res) => {
    res.send("Water Quality API Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
