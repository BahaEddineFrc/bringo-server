import { requireAuth } from './requireAuth'
import { signIn, signUp, signOut, changePassword } from './authController'

export default function (router) {
  router.post('/signUp', signUp)
  router.put('/signIn', signIn)

  router.put('/changePassword', requireAuth, changePassword)
  router.put('/signOut', requireAuth, signOut)

}





