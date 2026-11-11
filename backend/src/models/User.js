import mongoose from 'mongoose'
import encrypt from '../utils/encryption.js'
import {sendMail, renderMailHtml} from '../utils/mail/mail.js'
import {CLIENT_HOST, EMAIL_SMTP_USER} from '../utils/env.js'

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
        activationCode: {
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
    this.activationCode = encrypt(this.id)

})

userSchema.post('save', async function(doc, next) {
    try {
        const user = doc

        console.log(`Email send to: ${user.email}`)

        const contentMail = await renderMailHtml('registration-success.ejs', {
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            activationLink: `${CLIENT_HOST}/auth/activation?code=${user.activationCode}`
        })

        await sendMail({
            from: EMAIL_SMTP_USER,
            to: user.email,
            subject: "Aktivasi Akun Anda",
            html: contentMail
        })
    } catch (error) {
        console.log(error)
    } finally {
        next()
    }
})

userSchema.methods.toJSON = function (){
    const user = this.toObject()
    delete user.password

    return user
}

const User = mongoose.model('User', userSchema)

export default User 