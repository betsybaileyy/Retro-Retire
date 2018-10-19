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

app.put('/jobs/comments/:id', function (req, res) {
console.log("EDIT comment")
Comment.findByIdAndUpdate(req.params.id).then((comment) => {
  res.redirect(`/jobs/${comment.jobId}`);
}).catch((err) => {
  console.log(err.message);
})
})
}
//
// app.put('/jobs/:id', (req, res) => {
//   job.findByIdAndUpdate(req.params.id, req.body)
//     .then(job => {
//       res.redirect(`/jobs/${job._id}`)
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// })
