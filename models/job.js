const mongoose = require('mongoose');

const job = mongoose.model('job', {
    title: String,
    description: String,
    movieTitle: String
});

module.exports = job
