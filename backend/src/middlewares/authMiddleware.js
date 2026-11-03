import { getUserData } from "../utils/jwt.js"

export default (req, res, next) => {
    const authorization = req.headers?.authorization


    if(!authorization){
        return res.status(403).json({
            message: 'Unauthorized.',
            data: null
        })
    }
    const [prefix, accessToken] = authorization.split(" ")

    if(!(prefix === 'Bearer' && accessToken)){
        return res.status(403).json({
            message: 'Unauthorized.',
            data: null
        })
    }

    const user = getUserData(accessToken)

    if(!user){
        return res.status(403).json({
            message: 'Unauthorized.',
            data: null
        })
    }

    req.user = user

    next()
}