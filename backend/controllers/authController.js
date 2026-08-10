import User from "../models/User.js"

const login = async (req, res) => {
    try{
        const {username, password} = req.body

        const user = await User.findOne({username}).select('+password')

        if(user && (await user.matchPassword(password))) {
            res.status(200).json({
                success: true,
                message: 'Login berhasil!',
                data: {
                    _id: user._id,
                    username: user.username,
                    name: user.name
                }
            })
        } else {
            res.status(401).json({success: false, message: 'Nama pengguna atau kata sandi salah!'})
        }
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }

}

export { login } 