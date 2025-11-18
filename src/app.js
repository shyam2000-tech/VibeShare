import express from "express"
// import bookRouter from "./modules/books/book.route.js"

const app = express()

app.use(express.json())

// app.use('api/books',bookRouter)

export default app