const Joi = require("joi");

const expenseSchema = Joi.object({
    title: Joi.string().trim().min(2).max(100).required(),

    amount: Joi.number().positive().required(),

    category: Joi.string().trim().min(2).max(50).required(),

    date: Joi.date().iso().required()
});

function validateExpense(req, res, next) {
    const { error } = expenseSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    next();
}

module.exports = validateExpense;