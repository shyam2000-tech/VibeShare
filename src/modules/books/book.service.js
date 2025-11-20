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

  // Book search and filter service
  filterBooksService: async (filterData) => {
    const { search, language, minPrice, maxPrice } = filterData;

    const filteredQuery = {};

    if (search) {
      filteredQuery.$or = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
      ];
    }

    if (language) {
      filteredQuery.language = language;
    }

    if (minPrice || maxPrice) {
      filteredQuery.price = {};
      if (minPrice) filteredQuery.price.$gte = Number(minPrice);
      if (maxPrice) filteredQuery.price.$lte = Number(maxPrice);
    }

    const filteredBooks = BookModel.find(filteredQuery)
    return await filteredBooks
  },
};
