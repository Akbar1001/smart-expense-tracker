const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expenseController");

const validateExpense = require("../validations/expenseValidation");

// Validating the Expenses  
router.post(
    "/",
    validateExpense,
    expenseController.addExpense
);

// Add Expense
router.post("/", expenseController.addExpense);

// Get All Expenses
router.get("/", expenseController.getExpenses);

// Get Summary
router.get("/summary", expenseController.getSummary);

// Delete Expense
router.delete("/:id", expenseController.deleteExpense);



module.exports = router;