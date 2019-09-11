import { requireAuth } from '../auth/requireAuth'
import { getAllRestaurants, getRestauById, getCategoryById, getDishById, createRestau, deleteRestau } from './restaurantController'

export default function (router) {
  router.get('/restaurants', getAllRestaurants)
  router.get('/restaurant/:id', getRestauById)
  router.get('/restaurant/:rest_id/category/:cat_id', getCategoryById)
  router.get('/restaurant/dish/:dish_id', getDishById)

  router.post('/restaurant', requireAuth, createRestau)
  router.delete('/restaurant/:id', requireAuth, deleteRestau)
}
