const express = require("express");
const { getUsers, login, register } = require("../controllers/user.controller");
const router = express.Router();

router.get("/users", getUsers);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
