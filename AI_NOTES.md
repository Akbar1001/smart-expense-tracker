# AI Usage Notes

## AI Tools Used

- ChatGPT (OpenAI)

---

## 1. Which parts were AI-assisted?

AI was primarily used as a development assistant throughout the project. Specifically, it helped with:

- Designing the overall project architecture using a layered structure (Routes → Controllers → Services → Utilities).
- Suggesting REST API endpoint design and naming conventions.
- Recommending the use of middleware for validation and centralized error handling.
- Explaining backend concepts such as separation of concerns, async handlers, and custom error classes.
- Generating the initial structure for Swagger/OpenAPI documentation.
- Providing guidance for writing Jest and Supertest test cases.
- Suggesting improvements to project organization, documentation, and code readability.

---

## 2. What I implemented, validated, or modified

Although AI assisted with design suggestions and code examples, I personally:

- Implemented all project files within my local development environment.
- Integrated the different modules (routes, controllers, services, middleware, validations, utilities).
- Debugged runtime issues such as:
  - Middleware registration
  - Jest compatibility with the `uuid` package
  - Error handling behavior (404 vs 500)
  - Route configuration
  - Swagger integration
- Verified every API endpoint using Postman.
- Wrote, executed, and fixed the automated test suite until all tests passed successfully.
- Modified and refactored AI-generated suggestions where necessary to improve readability and maintainability.
- Ensured that the final project satisfies all assignment requirements.

---

## 3. AI Suggestions I Chose Not to Use

During development, several AI suggestions were intentionally not adopted:

- I chose to keep the project in **CommonJS** instead of converting it to ES Modules to keep the project simple and compatible with the existing setup.
- I did not introduce a database because the assignment explicitly stated that local JSON storage was sufficient.
- I removed the use of `dotenv` because the project did not require environment-specific configuration, making the setup simpler.
- I did not add additional features such as authentication, pagination, logging, or update endpoints because they were outside the scope of the assignment.

---

## 4. Verification Process

To ensure correctness, I:

- Tested every API endpoint using Postman.
- Validated successful and failure scenarios.
- Verified request validation using invalid input cases.
- Confirmed correct HTTP status codes.
- Executed the complete Jest test suite until all tests passed.
- Verified Swagger documentation through the browser.

---

## Reflection

AI accelerated development by helping with architectural decisions, debugging strategies, and code review suggestions. However, I reviewed, integrated, tested, and refined the generated code throughout the implementation process to ensure correctness and alignment with the assignment requirements.
