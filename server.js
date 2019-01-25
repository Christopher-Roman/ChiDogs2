const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//Models
const User = require('./models/user');
const Pet = require('./models/pet');
const Photo = require('./models/photo');
const Comment = require('./models/comment');
const Reply = require('./models/reply');
const Like = require('./models/like');

//Controllers
const userController = require('./controllers/user');
const petController = require('./controllers/pet');
const photoController = require('./controllers/photo');
const commentController = require('./controllers/comment');
const replyController = require('./controllers/reply');

//Database
require('./db/db');

//Middleware

app.use(sessions({
	secret: 'secret question information stuff.',
	resave: false,
	saveUninitialized: false
}));

// Required Controller
app.use('/user', userController);




