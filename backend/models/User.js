import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
            type: String,
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

// Hashing password
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// Custom method untuk membandingkan password saat login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User 