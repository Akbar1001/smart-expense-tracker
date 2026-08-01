const express = require("express");

const expenseRoutes = require("./routes/expenseRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

const { swaggerUi, swaggerSpec } = require("./config/swagger");

// Middleware
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Smart Expense Tracker API is running"
    });
});

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Expense Routes
app.use("/expenses", expenseRoutes);

app.use(errorHandler);

module.exports = app;