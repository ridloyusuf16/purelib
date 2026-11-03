import User from "../models/User.js"
import * as Yup from 'yup'
import encrypt from "../utils/encryption.js"
import { generateToken } from "../utils/jwt.js"

const registerValidateSchema = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), ""], "Password not match.")
})

const login = async (req, res) => {
    
    const {identifier, password} = req.body

    try{
        
        const userByIdentifier = await User.findOne({
            $or: [
                {
                    username: identifier
                },
                {
                    email: identifier
                }
            ]
        })

        if(!userByIdentifier){
            return res.status(403).json({
                message: 'User not found.',
                data: null
            })
        }

        const validatePassword = encrypt(password) === userByIdentifier.password

        if(!validatePassword){
            return res.status(403).json({
                message: 'Password is wrong.',
                data: null
            })
        }

        const token = generateToken({
            id: userByIdentifier._id,
            role: userByIdentifier.role
        })

        res.status(200).json({
            message: 'Login success.',
            data: token
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }

}

const register = async (req, res) => {
    const { fullName, username, email, password, confirmPassword} = req.body

    try {
        await registerValidateSchema.validate({
            fullName, 
            username, 
            email, 
            password, 
            confirmPassword
        })

        const result = await User.create({
            fullName, 
            username, 
            email, 
            password, 
        })

        res.status(200).json({
            message: "Succes registration",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }

}

const me = async (req, res) => {
    const user = req.user
    const result = await User.findById(user?.id)

    return res.status(200).json({
        message: 'Get user profile is success',
        data: result
    })
}

export default { login, register, me } 