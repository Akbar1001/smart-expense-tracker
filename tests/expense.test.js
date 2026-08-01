process.env.DATA_FILE = "tests/test-expenses.json";

const request = require("supertest");
const fs = require("fs/promises");
const path = require("path");

const app = require("../src/app");

const testFile = path.join(__dirname, "test-expenses.json");

// Reset test data before every test
beforeEach(async () => {
    await fs.writeFile(testFile, JSON.stringify([], null, 2));
});

// Helper function to create an expense
async function createExpense(expense = {}) {
    const defaultExpense = {
        title: "Test Expense",
        amount: 100,
        category: "General",
        date: new Date().toISOString().split("T")[0]
    };

    return request(app)
        .post("/expenses")
        .send({
            ...defaultExpense,
            ...expense,
        });
}

describe("POST /expenses", () => {

    test("should add a new expense", async () => {

        const response = await createExpense({
            title: "Pizza",
            amount: 450,
            category: "Food",
        });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Expense added successfully");

        expect(response.body.data.title).toBe("Pizza");
        expect(response.body.data.amount).toBe(450);
        expect(response.body.data.category).toBe("Food");
        expect(response.body.data.id).toBeDefined();
    });

    test("should reject invalid expense", async () => {

        const response = await request(app)
            .post("/expenses")
            .send({
                amount: 500,
                category: "Food",
                date: new Date().toISOString().split("T")[0]
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });

});

describe("GET /expenses", () => {

    test("should return all expenses", async () => {

        await createExpense();

        const response = await request(app).get("/expenses");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.count).toBe(1);
        expect(response.body.data).toHaveLength(1);
    });

    test("should filter expenses by category", async () => {

        await createExpense({
            title: "Pizza",
            amount: 450,
            category: "Food",
        });

        await createExpense({
            title: "Uber",
            amount: 200,
            category: "Transport",
        });

        const response = await request(app)
            .get("/expenses?category=Food");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.count).toBe(1);
        expect(response.body.data[0].title).toBe("Pizza");
        expect(response.body.data[0].category).toBe("Food");
    });

});

describe("GET /expenses/summary", () => {

    test("should calculate total expenses", async () => {

        await createExpense({
            title: "Pizza",
            amount: 500,
            category: "Food",
        });

        await createExpense({
            title: "Burger",
            amount: 300,
            category: "Food",
        });

        const response = await request(app)
            .get("/expenses/summary");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.total).toBe(800);
        expect(response.body.data.count).toBe(2);
    });

});

describe("DELETE /expenses/:id", () => {

    test("should delete an expense", async () => {

        const created = await createExpense({
            title: "Pizza",
            amount: 500,
            category: "Food",
        });

        const id = created.body.data.id;

        const deleted = await request(app)
            .delete(`/expenses/${id}`);

        expect(deleted.statusCode).toBe(200);
        expect(deleted.body.success).toBe(true);
        expect(deleted.body.message).toBe("Expense deleted successfully");

        const response = await request(app).get("/expenses");

        expect(response.body.count).toBe(0);
    });

    test("should return 404 for non-existing expense", async () => {

        const response = await request(app)
            .delete("/expenses/non-existing-id");

        expect(response.statusCode).toBe(404);
        expect(response.body.success).toBe(false);
    });

});