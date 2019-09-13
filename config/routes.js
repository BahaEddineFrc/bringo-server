import express from 'express'
const router = express.Router()

import authRoute from '../components/auth/authRoute'
import userRoute from '../components/user/userRoute'
import restaurantRoute from '../components/restaurant/restaurantRoute'
import deliveryRoute from '../components/delivery/deliveryRoute'
import uploadRoute from '../components/upload/uploadRoute'

authRoute(router)
userRoute(router)
restaurantRoute(router)
deliveryRoute(router)
//uploadRoute(router)


export default router
