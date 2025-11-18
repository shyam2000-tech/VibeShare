import express from "express";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "./book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/getallbooks", getAllBooks);
bookRouter.post("/createbook", createBook);
bookRouter.patch("/editbook/:id", updateBook);
bookRouter.delete('/deletebook/:id',deleteBook)

export default bookRouter;
