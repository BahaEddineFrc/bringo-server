import { requireAuth } from '../auth/requireAuth'
import upload from './uploadController'
import multer from 'multer'

export default function (router) {
    //TODO install multer
  router.post('/upload', requireAuth, multer({}).single('file'), upload)
  //.single(fieldname) Accept a single file with the name fieldname. The single file will be stored in req.file
}
