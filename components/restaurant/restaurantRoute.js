import { requireAuth } from '../auth/requireAuth'
import { getAllRestaurants, getRestauById, 
  getAllCategories,getAllDishes,createDish,deleteCategory,deleteDish,
  getCategoryById, getDishById, createRestau, deleteRestau, createCategory } from './restaurantController'

export default function (router) {
  router.get('/restaurants', getAllRestaurants)
  router.get('/restaurant/:id', getRestauById)
  router.post('/restaurant', requireAuth, createRestau)
  router.delete('/restaurant/:id', deleteRestau)


  router.get('/categories', getAllCategories)
  router.get('/category/:id', getCategoryById)
  router.post('/category', createCategory)
  router.delete('/category/:id', requireAuth, deleteCategory)

  router.get('/dishes', getAllDishes)
  router.get('/dish/:id', getDishById)
  router.post('/dish', createDish)
  router.delete('/dish/:id', deleteDish)
}
