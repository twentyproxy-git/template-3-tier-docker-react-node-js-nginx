const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from API" });
});

if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
}

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
