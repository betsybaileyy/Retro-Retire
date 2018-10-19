const Comment = require('../models/comment')

module.exports = (app) => {

  // NEW Comment
  // app.post('/jobs/comments', (req, res) => {
  //
  //   res.send('jobs comment')
  // })
  app.post('/jobs/comments', (req, res) => {
    Comment.create(req.body).then(comment => {
      res.redirect(`/jobs/${comment.jobId}`);
    }).catch((err) => {
      console.log(err.message);
      console.log("here working");
    });
  });
  app.delete('/jobs/comments/:id', function (req, res) {
  console.log("DELETE comment")
  Comment.findByIdAndRemove(req.params.id).then((comment) => {
    res.redirect(`/jobs/${comment.jobId}`);
  }).catch((err) => {
    console.log(err.message);
  })
})
}
