import { requireAuth } from './requireAuth'
import { updateProfile } from './userController'

export default function (router) {
  router.put('/user/profile', requireAuth, updateProfile)
  //router.put('/user/settings', requireAuth, updateSettings)
}
