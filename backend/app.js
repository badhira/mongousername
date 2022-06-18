const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();


const app = express();
const PORT = process.env.PORT || 5000;


const name1 = require('./routes/name')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Orign", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    next();
});

//api

app.use('/name', name1);



app.listen(PORT, () => {
    console.log(`..SERVER STARTED at $ { PORT } `)
})