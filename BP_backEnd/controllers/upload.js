exports.upload = async (req, res, next) => {
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
}