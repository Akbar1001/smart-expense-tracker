require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("======================================");
    console.log(`🚀 Server is running successfully!`);
    console.log(`🌐 Local: http://localhost:${PORT}`);
    console.log("======================================");
});


// require("dotenv").config();

// const app = require("./app");

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {

//     console.log(`🚀 Server running on http://localhost:${PORT}`);

// });