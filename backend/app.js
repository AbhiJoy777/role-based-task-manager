const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Running",
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;