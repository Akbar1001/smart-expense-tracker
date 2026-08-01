const expenseService = require("../services/expenseService");

// Add Expense
const addExpense = async (req, res) => {
    try {
        const expense = await expenseService.addExpense(req.body);

        res.status(201).json({
            success: true,
            message: "Expense added successfully",
            data: expense,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Expenses
const getExpenses = async (req, res) => {
    try {
        const category = req.query.category;

        const expenses = await expenseService.getExpenses(category);

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Placeholder for getting the summary
const getSummary = async (req, res) => {
    try {
        const category = req.query.category;

        const summary = await expenseService.getSummary(category);

        res.status(200).json({
            success: true,
            data: summary,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Placeholder for deleting the expenses
const deleteExpense = async (req, res) => {
    try {
        const deletedExpense = await expenseService.deleteExpense(
            req.params.id
        );

        res.status(200).json({
            success: true,
            message: "Expense deleted successfully",
            data: deletedExpense,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addExpense,
    getExpenses,
    getSummary,
    deleteExpense,
};