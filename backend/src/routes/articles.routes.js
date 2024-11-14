const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const authMiddleware = require("../middlewares/auth");

router.get("/articles", async (res) => {
  try {
    const article = await Article.find();
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.find(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/articles", authMiddleware, async (req, res) => {
  try {
    const article = new Article(req.body);
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/articles/:id", authMiddleware, async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/articles/:id", authMiddleware, async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article Successfully Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
