const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { getUsers, getProfile } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
