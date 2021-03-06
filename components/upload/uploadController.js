//import { DROPBOX_TOKEN } from '../../config/env'
//import request from 'superagent'
//import limax from 'limax'
//import path from 'path'

const BASE_URL_API = 'https://api.dropboxapi.com/2/'
const BASE_URL_CONTENT = 'https://content.dropboxapi.com/2/'

export default async (req, res) => {
  try {
    const arabicChars = /[\u0600-\u06FF]/

    let originalname = req.file.originalname.split('.')
    const extention = originalname[originalname.length - 1]
    
    delete originalname[originalname.length - 1]

    let filename = originalname.join('.')

    if (arabicChars.test(originalname))
      filename = 'Ar'
    
    const path = '/' + req.file.mimetype.split('/')[0] + '/' + req.user.id + '/' + Date.now() + '_' + limax(filename) + '.' + extention


    await request.post(BASE_URL_CONTENT + 'files/upload')
      .set('Content-Type', 'application/octet-stream')
      .set('User-Agent', 'api-explorer-client')
      .set('Authorization', 'Bearer ' + DROPBOX_TOKEN)
      .set('Dropbox-API-Arg', JSON.stringify({
        "path": path
      }))
      .set('Content-Length', req.file.size)
      .send(req.file.buffer)

    const result = await request.post(BASE_URL_API + 'sharing/create_shared_link_with_settings')
      .set('Content-Type', 'application/json')
      .set('User-Agent', 'api-explorer-client')
      .set('Authorization', 'Bearer ' + DROPBOX_TOKEN)
      .send(JSON.stringify({
        "path": path
      }))

    let url = JSON.parse(result.text).url
    url = url.substring(0, url.length - 4) + 'raw=1'

    return res.json({ fileUrl: url })

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
