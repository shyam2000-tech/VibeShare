import { bookService } from "./book.service.js";

// Get All Books API
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooksService();

    res.status(200).json({
      message: "Actived all books : ",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in getAllBooks API : ",
      error,
    });
  }
};

// Create Book API
export const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBookService(req.body);

    res.status(200).json({
      message: "Book created : ",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in createBook API : ",
      error,
    });
  }
};

// Update a Single Book API
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBook = await bookService.updateBookService(id, updateData);

    if (!updatedBook) {
      return res.status(404).json({ message: "No books founded" });
    }

    res.status(200).json({
      message: "updatedBook : ",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in updateBook APi : ",
      error,
    });
  }
};

// Delete a Single Book API
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await bookService.deleteBookService(id);

    res.status(200).json({
      message: "deletedBook : ",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in deleteBook API",
      error,
    });
  }
};

// Search and filter API
export const filterBooks = async (req, res) => {
  try {
    const filteredBooks = await bookService.filterBooksService(req.query);

    res.status(200).json({
      message: "Filtered books : ",
      data: filteredBooks,
    });
    console.log("Filtered books : ",filteredBooks)
  } catch (error) {
    res.status(500).json({
      message: "Error in filterBooks API : ",
      error,
    });
  }
};
