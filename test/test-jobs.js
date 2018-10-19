const chai = require('chai');
const chaiHttp = require('chai-http');
//const app = require('../app');
const should = chai.should();
//const job = require('../models/job');

module.exports = function(app) {
chai.use(chaiHttp);

describe('jobs', ()  => {

  // TEST INDEX
  it('should index ALL jobs on / GET', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });
  // test-jobs.js
    // TEST NEW
    it('should display new form on /jobs/new GET', (done) => {
      chai.request(server)
        .get(`/jobs/new`)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html
            done();
          });
    })
    // TEST SHOW
it('should show a SINGLE job on /jobs/<id> GET', (done) => {
  var job = new job(samplejob);
  job.save((err, data) => {
    chai.request(server)
      .get(`/jobs/${data._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
  });
});
  // TEST NEW
  // TEST CREATE
  // TEST SHOW
  // TEST EDIT
  // TEST UPDATE
  // TEST DELETE
});

}
