import express from 'express'
import {getUserById, getUsers, updateUser, createUser, deleteUser} from '../controllers/userController.js'

const router = express.Router()

// Endpoint untuk /api/users
router.route('/')
  .get(getUsers)
  .post(createUser)

// Endpoint untuk /api/users/:id
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

export default router