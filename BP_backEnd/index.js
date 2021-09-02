const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const fileUpload = require('express-fileupload')

const { sequelize } = require('./database/models')

const authRouter = require('./routes/auth')
const productRouter = require('./routes/products')
const cartRouter = require('./routes/cart')
const checkoutRouter = require('./routes/checkout')
const adminRouter = require('./routes/admin')
const authorizationAdmin = require('../BP_backEnd/middleware/authorization_admin')


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(fileUpload({
  createParentPath: true
}))

sequelize.authenticate().then(() => {
  console.log(`Success connecting database`)                   
})

app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/checkout', checkoutRouter)
app.use('/admin', adminRouter)

app.use('/upload', authorizationAdmin ,async (req, res, next) => {
  const randomString = Math.random().toString(30).substring(2, 15) + Math.random().toString(30).substring(2, 15)
  try {
    if (!req.files) {
      res.status(500).send({
        status: "failed",
        code: 500,
        message: "No file uploaded"
      })
    } else {
      const image = req.files.image
      image.mv(`${__dirname}/public/${randomString}_${image.name}`, (err) => {
        if (err) {
          res.send({err})
        }
        res.send({
          data: `http://localhost:8000/${randomString}_${image.name}`
        })
      })
    }

  } catch (error) {
    return next(error)
  }
})

app.use((error, req, res, next) => {                         
  return res.status(400).json({
    status: 'error',
    code: 400,
    message: 'Bad request',
    error: error.message
  })
})

app.get('/', (req, res) => {
  return res.status(200).json({
    status: '.....',
    code: 400,
    message: 'Bad request'
  })
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})