import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username wajib diisi.'],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password wajib diisi.'],
            minLength: [8, 'Password minimal 8 karakter.'],
            select: false,
            // trim: true | Tidak disarankan karena bisa saja user memang menggunakan spasi dalam membuat passwordnya
        },
        name: {
            type: String,
            required: [true, 'Nama wajib diisi!'],
            trim: true
        },
        role: {
            type: String,
            enum: ['Admin', 'Guest'],
            default: 'Guest'
        },
        status: {
            type: Boolean,
            enum: {
                values: ['Aktif', 'Tidak Aktif'],
                messages: '{VALUE} bukan status yang valid.'
            },
            default: 'Aktif'
        }
    },
    {
       timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

export default User 