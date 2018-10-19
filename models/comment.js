const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
  title: String,
  content: String,
  jobId: { type: Schema.Types.ObjectId, ref: 'Job' }
});

module.exports = Comment
