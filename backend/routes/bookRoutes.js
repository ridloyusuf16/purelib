import express from 'express'
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js'

const router = express.Router()

// Endpoint untuk /api/books
router.route('/')
  .get(getBooks)
  .post(createBook)

// Endpoint untuk /api/books/:id
router.route('/:id')
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook)

export default router