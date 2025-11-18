📚 BooksCollections – Backend API

A simple and scalable backend API built using **Node.js**, **Express**, and *MongoDB*.
This project supports full CRUD operations for managing books, along with a clean **Modular MVC architecture** and dedicated service layers.
The project also includes additional modules such as Books and Users for future expansion.

🚀 Tech Stack

Node.js
Express.js
MongoDB & Mongoose
Postman (for API testing)


📁 Project Architecture

This project follows Modular MVC Architecture, ensuring clean separation of:

Models
Controllers
Services
Routes
Config
Middlewares

This makes the backend more structured, testable, and scalable.


📦 Installation

Clone the repository: 

**git clone <your-repository-url>
**cd BooksCollections

Install dependencies:

**npm install


🧩 Modules Included

📘 Books Module

Create book
Read all books
Read single book
Update book
Delete (soft delete) book

👤 Users Module

(You can add authentication, roles, etc., later)


📡 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/books`     | Get all books     |
| GET    | `/api/books/:id` | Get single book   |
| POST   | `/api/books`     | Create a new book |
| PUT    | `/api/books/:id` | Update a book     |
| DELETE | `/api/books/:id` | Delete a book     |


👨‍💻 Author

Shyam Krishna S S
MERN Stack Developer
Kozhikode, Kerala, India