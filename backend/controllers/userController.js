import User from '../models/User'

const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    res.status(200).json({ success: true, count: users.length, data: users })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ success: false, message: 'Pengguna tidak ditemukan' })
    }
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json({success: true, message: "Data pengguna berhasil ditambahkan!", data: user})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!user) {
            return res.status(404).json({success: false, message: 'Pengguna tidak ditemukan.'})
        }

        res.status(200).json({success: true, message: 'Data pengguna berhasil diperbarui.'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Data pengguna gagal diperbarui. ' + error.message})
    }
}

const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) {
            return res.status(404).json({success: false, message: 'Pengguna tidak ditemukan.'})
        }

        res.status(200).json({success: true, message: 'Data pengguna berhasil dihapus.'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Data pengguna gagal dihapus. ' + error.message})
    }
}

export {getUsers, getUserById, createUser, updateUser, deleteUser}