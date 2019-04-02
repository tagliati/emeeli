import app from './app'

if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, function () {
    console.log('run')
  })
}
module.exports = app
