const mongoose = require('mongoose');

const job = mongoose.model('job', {
    title: String,
    description: String,
    jobTitle: String
});

module.exports = job
