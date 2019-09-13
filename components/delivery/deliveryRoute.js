import { requireAuth } from '../auth/requireAuth'
import { checkOutDish, GetDeliveryById } from './deliveryController'

export default function (router) {
  router.post('/restaurant/:rest_id/category/:cat_id/dish/:dish_id/delivery', requireAuth, checkOutDish) //:x? :x
  router.get('/delivery/:id', requireAuth, GetDeliveryById) 
}
