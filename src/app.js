const express = require("express");

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middleware
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Smart Expense Tracker API is running"
    });
});

// Expense Routes
app.use("/expenses", expenseRoutes);

module.exports = app;