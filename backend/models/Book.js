import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul buku wajib diisi'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Nama penulis wajib diisi'],
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
      default: '',
    },
    category: {
      type: String,
      trim: true,
      default: 'Umum',
    },
    publishedYear: {
      type: Number,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['Belum Dibaca', 'Sedang Dibaca', 'Selesai'],
      default: 'Belum Dibaca',
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
)

// Membuat Model dari Schema
const Book = mongoose.model('Book', bookSchema)

export default Book