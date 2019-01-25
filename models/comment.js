const mongoose = require('mongoose');
const Like = require('./like');
const Reply = require('./reply');


const commentSchema = new mongoose.Schema({
	body: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	likeCount: Number,
	likes: [Like.schema],
	reply: [Reply.schema]
})

module.exports = mongoose.model('Comment', commentSchema)