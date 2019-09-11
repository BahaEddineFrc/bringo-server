import { requireAuth } from '../auth/requireAuth'
import upload from './uploadController'
import multer from 'multer'

export default function (router) {
    //TODO install multer
  router.post('/upload', requireAuth, multer({}).single('file'), upload)
}
