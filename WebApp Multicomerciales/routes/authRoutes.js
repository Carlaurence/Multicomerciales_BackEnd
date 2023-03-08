const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");
router.post(
    "/",
    authControllers.authUsers
);

router.get("/", authMiddleware, authControllers.authenticatedUsers);

module.exports = router;