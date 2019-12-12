
const express = require('express');
const app = express();
const path = require('path');
const ejsLint = require('ejs-lint');

// Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')


// Router 
app.use(require('./routes/index'));

// Middlewares

// Static files.
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});
