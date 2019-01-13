// import express from 'express';
// // import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// // import bookRouter from './Routes/bookRouter';
// // import bookRouter1 from './Routes/bookRouter1';
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/Books', {
    useNewUrlParser:true
});
const app = express();
const port = process.env.PORT || 5656;
// routes go here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/");
});


// app.get('/api/books', (req, res) => {
//     res.json([{
//             id: 1,
//             title: "Alice's Adventures in Wonderland",
//             author: "Charles Lutwidge Dodgson"
//         },
//         {
//             id: 2,
//             title: "Einstein 's Dreams",
//             author: "Alan Lightman"
//         }
//     ])
// });
// app.get('/api/books/2', (req, res) => {
//     res.json({
//         id: 2,
//         title: "Einstein 's Dreams",
//         author: "Alan Lightman"
//     })
// });

let bookRouter = require('./Routes/bookRouter');
app.use('/api/Books', bookRouter);

// let bookRouter1 = require('./Routes/bookRouter1');
// app.use('/api/Books', bookRouter1);