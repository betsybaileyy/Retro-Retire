module.exports = (app) => {

  // NEW Comment
  app.post('/jobs/comments', (req, res) => {
    res.send('jobs comment')
  })

}
