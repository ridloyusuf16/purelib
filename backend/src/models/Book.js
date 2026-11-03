import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul buku wajib diisi'],
      trim: true,
      maxlength: [150, 'Judul buku terlalu panjang (maksimal 150 karakter).']
    },
    author: {
      type: String,
      required: [true, 'Nama penulis wajib diisi'],
      trim: true,
      minlength: [2, 'Nama penulis minimal 2 karakter.'],
      maxlength: [100, 'Nama penulis maksimal 100 karakter.']
    },
    isbn: {
      type: String,
      trim: true,
      uppercase: true,
      validate: {
        validator: function(val) {

          if (!val) return true; 

          return /^\d{13}$/.test(val);
        },
        message: 'Format ISBN harus terdiri dari 13 digit angka.'
      },
      default: '',
    },
    category: {
      type: String,
      trim: true,
      required: [true, 'Genre wajib dipilih.'],
      enum: {
        values: ['Fiksi', 'Non-Fiksi', 'Teknologi', 'Pengembangan Diri', 'Sejarah', 'Lainnya'],
        message: 'Genre "{VALUE}" tidak valid. Pilih genre yang tersedia.'
      },
    },
    publishedYear: {
      type: Number,
      validate: {
        validator: function (val) {
          const currYear = new Date().getFullYear()

          return val >= 1000 && val <= currYear
        },
        message: 'Tahun terbit tidak boleh melebihi tahun saat ini.'
      }
    },
    pageCount: {
      type: Number,
      min: [1, 'Jumlah halaman minimal harus 1.'],
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