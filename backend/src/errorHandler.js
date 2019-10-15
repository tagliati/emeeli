export default function (err, req, res, next) {
  const error = JSON.parse(err.message)
  res.status(error.status).send(error)
}
