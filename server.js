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
const userController = require('./controllers/userController');
const petController = require('./controllers/petController');
const photoController = require('./controllers/photoController');
const commentController = require('./controllers/commentController');
const replyController = require('./controllers/replyController');

//Database
require('./db/db');

//Middleware

app.use(session({
	secret: 'secret question information stuff.',
	resave: false,
	saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extend: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Required Controller
app.use('/user', userController);




app.listen(PORT, () => {
	console.log('Server listening');
})