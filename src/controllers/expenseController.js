const addExpense = (req, res) => {
    res.status(201).json({
        message: "Add Expense Controller"
    });
};

const getExpenses = (req, res) => {
    res.json({
        message: "Get Expenses Controller"
    });
};

const getSummary = (req, res) => {
    res.json({
        message: "Summary Controller"
    });
};

const deleteExpense = (req, res) => {
    res.json({
        message: "Delete Controller"
    });
};

module.exports = {
    addExpense,
    getExpenses,
    getSummary,
    deleteExpense
};