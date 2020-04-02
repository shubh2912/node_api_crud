var http = require('https');
var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blogRoute = require('./Routes/Blog');

const hostname = 'localhost';
const port = 8082;

const app = express();

app.use(bodyParser.json());

app.use('/blog', blogRoute);

const server = http.createServer(app);

mongoose.connect('mongodb+srv://root:Qwerty@123@cluster0-zcikl.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    console.log('Connected');
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})