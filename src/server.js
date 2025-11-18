import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import app from "./app.js";
import bookRouter from "./modules/books/book.route.js";

dotenv.config()

connectDB()

app.use('/api/books',bookRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Running at localhost:${PORT}`)
})