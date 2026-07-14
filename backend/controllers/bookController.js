import Book from '../models/Book.js'

// @desc    Get all books
// @route   GET /api/books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 })
    res.status(200).json({ success: true, count: books.length, data: books })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// @desc    Get single book by ID
// @route   GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ success: false, message: 'Buku tidak ditemukan' })
    }
    res.status(200).json({ success: true, data: book })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// @desc    Create a new book
// @route   POST /api/books
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.status(201).json({ success: true, data: book })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// @desc    Update book by ID
// @route   PUT /api/books/:id
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Mengembalikan data yang sudah terupdate
      runValidators: true, // Memastikan data baru tetap mematuhi aturan Schema
    })

    if (!book) {
      return res.status(404).json({ success: false, message: 'Buku tidak ditemukan' })
    }

    res.status(200).json({ success: true, data: book })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// @desc    Delete book by ID
// @route   DELETE /api/books/:id
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)

    if (!book) {
      return res.status(404).json({ success: false, message: 'Buku tidak ditemukan' })
    }

    res.status(200).json({ success: true, message: 'Buku berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}