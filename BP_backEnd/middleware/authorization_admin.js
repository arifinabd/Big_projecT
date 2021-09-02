const jwt = require('jsonwebtoken')
const { Admin } = require ('../database/models')

const { SECRET_TOKEN } = process.env

const authorization = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, SECRET_TOKEN)
    const user = await Admin.findOne({
      where: {
        id: decoded.adminId
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