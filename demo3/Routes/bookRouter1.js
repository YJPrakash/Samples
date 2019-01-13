// import express from 'express';
let express = require('express');
// let bodyParser = require('body-parser');

const bookRouter = express.Router();
// bookRouter.use(bodyParser.json());
bookRouter
    .get('/', (req, res) => {
        res.json([{
                id: 1,
                title: "Alice's Adventures in Wonderland",
                author: "Charles Lutwidge Dodgson"
            },
            {
                id: 2,
                title: "Einstein 's Dreams",
                author: "Alan Lightman"
            }
        ])
    })
    .get('/2', (req, res) => {
        res.json({
            id: 2,
            title: "Einstein 's Dreams",
            author: "Alan Lightman"
        })
    })

// export default bookRouter;
module.exports = bookRouter;