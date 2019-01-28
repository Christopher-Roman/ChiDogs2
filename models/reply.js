const mongoose = require('mongoose');
const Like = require('./like');

const replySchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	likes: [Like.schema]
})

module.exports = mongoose.model('Reply', replySchema	)