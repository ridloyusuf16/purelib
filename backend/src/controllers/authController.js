import User from "../models/User.js"
import * as Yup from 'yup'
import encrypt from "../utils/encryption.js"
import { generateToken } from "../utils/jwt.js"

const registerValidateSchema = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().required()
    .min(8, 'Password must be at least 8 characters.')
    .test('at-least-one-uppercase-letter', (value) => {
        if(!value) return false
        
        const regex = /^(?=.*[A-Z])/

        return regex.test(value)
    })
    .test('at-least-one-number', (value) => {
        if(!value) return false
        
        const regex = /^(?=.*\d)/

        return regex.test(value)
    }),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), ""], "Password not match.")
})

const login = async (req, res) => {
    /*
    #swagger.tags = ['Auth']
    #swagger.requestBody = {
        required: true,
        schema: {
            $ref: "#/components/schemas/LoginRequest"
        }
    }
    */
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
            ],
            isActive: true
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

    /*
    #swagger.tags = ['Auth']
    #swagger.requestBody = {
        required: true,
        schema: {
            $ref: "#/components/schemas/RegisterRequest"
        } 
    }
    */

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
    /*
    #swagger.tags = ['Auth']
    #swagger.security = [
        {
            "bearerAuth": []
        }
    ]
    */

    try {
        const user = req.user
        const result = await User.findById(user?.id)
    
        return res.status(200).json({
            message: 'Get user profile is success',
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

const activation = async (req, res) => {

    /*
    #swagger.tags = ['Auth']
    #swagger.requestBody = {
        required: true,
        schema: {
            $ref: "#/components/schemas/ActivationRequest"
        }
    }
    */

    try{
        const {code} = req.body

        const result = await User.findOneAndUpdate({
            activationCode: code
        }, {
            isActive: true
        }, {
            new: true
        })

        res.status(200).json({
            message: 'User succesfully activated.',
            data: result
        })

    }catch(error){
        return res.status(400).json({
            message: error.message,
            data: null
        })
    }

}

export default { login, register, me, activation } 