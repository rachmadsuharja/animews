const express = require("express");
const cors = require("cors");
const connect = require("./config/database");
const articleRoutes = require("./routes/articles.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
require("dotenv").config();

const app = express();

connect();

app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public/")));

app.get("/api", (req, res) => {
  res.send("Welcome to Animews Backend API");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", articleRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.info(`Server running on port ${process.env.PORT}`);
});
