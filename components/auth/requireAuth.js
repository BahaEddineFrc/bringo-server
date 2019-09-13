import User from '../user/user'

export const requireAuth = async (req, res, next) => {
  try {
    let reqToken = req.headers.authorization
    if (reqToken && reqToken.includes(' ')) reqToken = reqToken.split(' ')[1]  //cz sending token from client in Header Authaurization adds "Bearer "

    console.log("user token : "+reqToken)

    const user = await User.findOne({ token : reqToken })

    if (!reqToken || !user) return res.status(401).end()

    req.user = user
    return next()

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
