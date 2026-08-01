const asyncHandler = require("../utils/asyncHandler");
const expenseService = require("../services/expenseService");



// Add Expense
const addExpense = asyncHandler(async (req, res) => {

    const expense = await expenseService.addExpense(req.body);

    res.status(201).json({
        success: true,
        message: "Expense added successfully",
        data: expense
    });

});

// Get Expenses
const getExpenses = asyncHandler(async (req, res) => {

    const category = req.query.category;

    const expenses =
        await expenseService.getExpenses(category);

    res.status(200).json({
        success: true,
        count: expenses.length,
        data: expenses
    });

});

// Placeholder for getting the summary
const getSummary = asyncHandler(async (req, res) => {

    const summary =
        await expenseService.getSummary(req.query.category);

    res.status(200).json({
        success: true,
        data: summary
    });

});

// Placeholder for deleting the expenses
const deleteExpense = asyncHandler(async (req, res) => {
    const deletedExpense = await expenseService.deleteExpense(req.params.id);

    res.status(200).json({
        success: true,
        message: "Expense deleted successfully",
        data: deletedExpense,
    });
});


module.exports = {
    addExpense,
    getExpenses,
    getSummary,
    deleteExpense
};