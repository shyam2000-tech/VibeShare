import express from "express";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  filterBooks
} from "./book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/getallbooks", getAllBooks)
bookRouter.post("/createbook", createBook)
bookRouter.patch("/editbook/:id", updateBook)
bookRouter.patch('/deletebook/:id',deleteBook)
bookRouter.get('/filter',filterBooks)

export default bookRouter;
