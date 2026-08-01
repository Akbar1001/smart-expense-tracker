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

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Add a new expense
 *     tags:
 *       - Expenses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - category
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *                 example: Pizza
 *               amount:
 *                 type: number
 *                 example: 450
 *               category:
 *                 type: string
 *                 example: Food
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-08-02
 *     responses:
 *       201:
 *         description: Expense added successfully
 */
router.post("/", validateExpense, expenseController.addExpense);

module.exports = router;