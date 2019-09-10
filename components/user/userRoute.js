import { requireAuth } from '../../config/passport'
import { get, create, remove, like, getComments, comment, replyComment, deleteComment, report, deleteFeed } from './deliveryController'

export default function (router) {
  router.get('/feeds/:type?/:lastFeed?', requireAuth, get)
  router.get('/feeds/:type?/:lastFeed?', requireAuth, get)
  router.post('/feed', requireAuth, create)

  router.get('/feed/:id/comments', requireAuth, getComments)
  router.put('/feed/:id/like', requireAuth, like)
  router.put('/feed/:id/comment', requireAuth, comment)
  router.put('/feed/:id/comment/:comment/reply', requireAuth, replyComment)
  router.put('/feed/:id/comment/:comment/delete', requireAuth, deleteComment)

  router.put('/feed/:id/delete', requireAuth, deleteFeed)
  router.put('/feed/:id/report', requireAuth, report)
}
