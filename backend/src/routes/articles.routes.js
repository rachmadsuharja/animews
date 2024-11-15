const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article.controller");

router.get("/articles", getArticles);

router.get("/articles/:id", getArticleById);

router.post("/articles", authMiddleware, createArticle);

router.put("/articles/:id", authMiddleware, updateArticle);

router.delete("/articles/:id", authMiddleware, deleteArticle);

module.exports = router;
