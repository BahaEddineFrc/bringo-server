import { requireAuth } from '../auth/requireAuth'
import { getAllUsers, getUserById, deleteUser, updateProfile } from './userController'

export default function (router) {
  router.get('/users', getAllUsers)
  router.get('/user/:id', getUserById)
  router.delete('/user/:id', deleteUser)
  router.put('/user/profile', requireAuth, updateProfile)
  //router.put('/user/settings', requireAuth, updateSettings)
}
