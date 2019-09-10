import user from '../../services/roles'
import { requireAuth } from '../../config/passport'
import {
  signIn, signUp, activation, signOut, changePassword,
  demandeResetPassword, resetPassword, verifyPin, resendPin,
  verifyUsername, refreshFcm
} from './authController'

export default function (router) {
  router.post('/signUp', signUp)
  router.post('/signIn', signIn)

  router.put('/verifyPin', verifyPin)
  router.put('/verifyUsername', verifyUsername)
  router.put('/activation', activation)
  router.put('/changePassword', requireAuth, changePassword)
  router.put('/signOut', requireAuth, signOut)
  router.put('/demandResetPassword', demandeResetPassword)
  router.put('/resetPassword', resetPassword)
  router.put('/resendPin', resendPin)

}





