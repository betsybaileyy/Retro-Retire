const mongoose = require('mongoose');
const Comment = require('./comment')

const Job = mongoose.model('Job', {
    title: String,
    description: String,
    jobTitle: String
});

module.exports = Job
