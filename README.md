# Smart Expense Tracker API

A RESTful API built with **Node.js** and **Express.js** for managing personal expenses. This project allows users to add, view, filter, summarize, and delete expenses while storing data in a local JSON file.

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses
  - Overall summary
  - Category-wise summary
- Delete an expense
- Input validation using Joi
- Global error handling
- Interactive API documentation using Swagger
- Unit and integration testing using Jest & Supertest

---

## Tech Stack

- Node.js
- Express.js
- Joi
- Swagger (swagger-jsdoc & swagger-ui-express)
- Jest
- Supertest

---

## Project Structure

```text
smart-expense-tracker/
│
├── README.md
├── AI_NOTES.md
├── package.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── validations/
│   ├── utils/
│   └── data/
│
└── tests/
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd smart-expense-tracker
```

Install dependencies

```bash
npm install
```

---

## Run the Server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

## Run Tests

```bash
npm test
```

---

## API Documentation

Once the server is running, open:

```
http://localhost:3000/api-docs
```

Swagger UI provides interactive documentation for all available endpoints.

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/expenses` | Add a new expense |
| GET | `/expenses` | Get all expenses |
| GET | `/expenses?category=Food` | Filter expenses by category |
| GET | `/expenses/summary` | Get total expenses |
| GET | `/expenses/summary?category=Food` | Get category summary |
| DELETE | `/expenses/:id` | Delete an expense |

---

## Sample Request

### Add Expense

```http
POST /expenses
```

Request Body

```json
{
    "title": "Pizza",
    "amount": 450,
    "category": "Food",
    "date": "2026-08-02"
}
```

Response

```json
{
    "success": true,
    "message": "Expense added successfully",
    "data": {
        "id": "generated-uuid",
        "title": "Pizza",
        "amount": 450,
        "category": "Food",
        "date": "2026-08-02"
    }
}
```

---

## Running the Tests

The test suite uses a separate JSON file (`tests/test-expenses.json`) so test execution does not affect the application's data.

Run:

```bash
npm test
```

---

## Future Improvements

- Database integration (MongoDB/PostgreSQL)
- User authentication
- Pagination
- Expense update endpoint
- Sorting and advanced filtering
