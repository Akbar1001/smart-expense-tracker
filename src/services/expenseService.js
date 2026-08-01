const { v4: uuidv4 } = require("uuid");
const { readExpenses, writeExpenses } = require("../utils/fileHandler");

// Add a new expense
async function addExpense(expenseData) {
    const expenses = await readExpenses();

    const newExpense = {
        id: uuidv4(),
        title: expenseData.title,
        amount: Number(expenseData.amount),
        category: expenseData.category,
        date: expenseData.date,
    };

    expenses.push(newExpense);

    await writeExpenses(expenses);

    return newExpense;
}

// Get all expenses or filter by category
async function getExpenses(category) {
    const expenses = await readExpenses();

    if (category) {
        return expenses.filter(
            (expense) =>
                expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    return expenses;
}

// Calculate total expenses
async function getSummary(category) {
    const expenses = await readExpenses();

    let filteredExpenses = expenses;

    if (category) {
        filteredExpenses = expenses.filter(
            (expense) =>
                expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    const total = filteredExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return {
        category: category || "All",
        total,
        count: filteredExpenses.length,
    };
}

// Delete an expense
const ApiError = require("../utils/ApiError");

async function deleteExpense(id) {
    const expenses = await readExpenses();

    const expenseIndex = expenses.findIndex(
        (expense) => expense.id === id
    );

    if (expenseIndex === -1) {
        throw new ApiError(404, "Expense not found");
    }

    const deletedExpense = expenses.splice(expenseIndex, 1)[0];

    await writeExpenses(expenses);

    return deletedExpense;
}


module.exports = {
    addExpense,
    getExpenses,
    getSummary,
    deleteExpense
};