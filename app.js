var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blogRoutes = require('./Routes/Blog');

const hostname = 'localhost';
const port = 8082;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/blog', blogRoutes);

mongoose.connect('mongodb+srv://root:Qwerty@123@cluster0-zcikl.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    console.log('Connected');
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})