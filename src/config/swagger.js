const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Smart Expense Tracker API",
            version: "1.0.0",
            description:
                "A REST API for managing personal expenses built with Node.js and Express.",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development Server",
            },
        ],
    },

    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};