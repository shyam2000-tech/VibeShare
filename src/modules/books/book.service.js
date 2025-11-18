import BookModel from "./book.model.js";

export const bookService = {
  // Get all active books
  getAllBooksService: async () => {
    return await BookModel.find({ isActive: true });
  },

  // Create a new book
  createBookService: async (datas) => {
    const newBook = await BookModel.create(datas);
    return newBook;
  },

  // Update a book by ID
  updateBookService: async (id, updatedField) => {
    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      { $set: updatedField },
      { new: true }
    );
    return updatedBook;
  },

  // Delete a book by ID
  deleteBookService: async (id) => {
    const deletedBook = await BookModel.findByIdAndDelete(
      id,
      { $set: { isActive: false } },
      { new: true }
    );
    return deletedBook;
  },
};
