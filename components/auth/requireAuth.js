import User from '../user/user'

export const requireAuth = async (req, res, next) => {
  try {
    let reqToken = req.headers.authorization
    //if (reqToken && reqToken.includes(' ')) reqToken = reqToken.split(' ')[1] //TODO why?

    const user = await User.findOne({ token : reqToken })

    if (!user) return res.status(401).end()

    req.user = user
    return next() //TODO ckoi?

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
