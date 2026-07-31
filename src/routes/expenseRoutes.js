const express = require("express");

const router = express.Router();

// GET /expenses
router.get("/", (req, res) => {
    res.json({
        message: "Get all expenses"
    });
});

module.exports = router;