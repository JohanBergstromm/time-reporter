// System
import {} from 'dotenv/config';

// Import node packages.
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//Routes
import index from 'routes/index';
import timeBank from 'routes/time-bank';
import timeReport from 'routes/time-report';

// Connect to mongodb
const dbUrl = 'mongodb://localhost/time-reporter';

mongoose.connect(dbUrl);

mongoose.connection.on('open', () => {
    console.log('Connected to mongo server.')
}).on('error', (err) => {
    console.log('Could not connect to mongo server.', err);
});

// Create an express instance.
const app = express();

// Set handlebars as the view engine.
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(viewsDir, 'layouts'),
    partialsDir: path.join(viewsDir, 'partials')
}));
app.set('view engine', 'handlebars');

// Setup static paths
app.use('/handlebars', express.static(path.join(__dirname, 'node_modules/handlebars')));
// app.use('/templates', express.static(path.join(__dirname, 'public/templates')));

// Set the public-folder to static.
app.use(express.static('public'));

app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/', timeBank);
app.use('/', timeReport);

// Create a http server and start it on port 3000.
const http = require('http').Server(app);

http.listen(3000, () => {
    console.log('Listening for connections to port: 3000')
});