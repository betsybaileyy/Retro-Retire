const job = require('../models/job')

module.exports = function(app) {

    app.get('/', (req, res) => {
        job.find()
            .then(jobs => {
                res.render('jobs-index', {
                    jobs: jobs
                });
            })
            .catch(err => {
                console.log(err);
            })
    })



    app.get('/jobs/new', (req, res) => {
        res.render('jobs-new', {});
    })

    app.get('/jobs/:id', (req, res) => {
        job.findById(req.params.id).then((job) => {
            res.render('jobs-show', { job: job })
        }).catch((err) => {
            console.log(err.message);
        })
    });

    app.post('/jobs', (req, res) => {
        job.create(req.body).then((job) => {
            console.log(job);
            res.redirect(`/jobs/${job._id}`);
        }).catch((err) =>{
            console.log(err.message);
        })
    })

    app.get('/jobs/:id/edit', (req, res) => {
        job.findById(req.params.id, function(err, job) {
            res.render('jobs-edit', {job: job});
        })
    })

    app.put('/jobs/:id', (req, res) => {
      job.findByIdAndUpdate(req.params.id, req.body)
        .then(job => {
          res.redirect(`/jobs/${job._id}`)
        })
        .catch(err => {
          console.log(err.message)
        })
    })

    app.delete('/jobs/:id', function (req, res) {
      console.log("DELETE job")
      job.findByIdAndRemove(req.params.id).then((job) => {
        res.redirect('/');
      }).catch((err) => {
        console.log(err.message);
      })
    })
}
