const express = require("express");
const cors = require("cors");
const connect = require("./config/database");
const articleRoutes = require("./routes/articles.routes");
const authRoutes = require("./routes/auth.routes");
require("dotenv").config();

const app = express();

connect();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to Animews Backend API");
});

app.use("/api/auth", authRoutes);
app.use("/api", articleRoutes);

app.listen(process.env.PORT, () => {
  console.info(`Server running on port ${process.env.PORT}`);
});
