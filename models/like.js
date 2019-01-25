const mongoose = require('mongoose');
const Comment = require('./comment');

const likeSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Like', likeSchema);