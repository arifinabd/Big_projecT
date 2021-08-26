const jwt = require('jsonwebtoken')
const { User } = require ('../database/models')

const { SECRET_TOKEN } = process.env

const authorization = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, SECRET_TOKEN)
    const user = await User.findOne({
      where: {
        id: decoded.userId
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    next()
  } catch (error) {
    res.status(401).json({
      status: "error",
      cose: 401,
      message: error.message
    })
  }
}

module.exports = authorization