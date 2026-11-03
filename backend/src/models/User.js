import mongoose from 'mongoose'
import encrypt from '../utils/encryption.js' 

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Nama wajib diisi!'],
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
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
            // select: false,
            // trim: true | Tidak disarankan karena bisa saja user memang menggunakan spasi dalam membuat passwordnya
        },
        role: {
            type: String,
            enum: ['Admin', 'Guest'],
            default: 'Guest'
        },
        isActive: {
            type: Boolean,
            default: false
        },
        codeActivation: {
            type: String
        }
    },
    {
       timestamps: true
    }
)

// Hashing password
userSchema.pre('save', function () {
    this.password = encrypt(this.password)
})

userSchema.methods.toJSON = function (){
    const user = this.toObject()
    delete user.password

    return user
}

const User = mongoose.model('User', userSchema)

export default User 