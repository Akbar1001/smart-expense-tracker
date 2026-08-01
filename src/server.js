
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`
====================================================
🚀 Smart Expense Tracker API is running!

🌐 Local: http://localhost:${PORT}
📖 Swagger Docs: http://localhost:${PORT}/api-docs
====================================================
`);
});