// import express from 'express';
// import Book from '../models/bookModel';
let express = require('express');
let Book = require('../models/bookModel');

const bookRouter = express.Router();
bookRouter.route('/')
    .get((req, res) => {
        // Book.find({}, (err, books) => {
        //     res.json(books)
        // })
        Book.find().then(books=>{
            res.json(books);
        }).catch(err=>{
            console.log(err.message)
        });
    }).post((req, res) => {
        let book = new Book({
            title: 'The Bull',
            author: 'Saki'
        });
        book.save();
        res.status(201).send(book)
        console.log(book)
    });
bookRouter.route('/:bookId')
    .get((req, res) => {
        Book.findById(req.params.bookId).then(book => {
            res.json(book);
        }).catch(err => {
            console.log(err.message)
        });
    }).put((req, res) => {
        Book.findById(req.params.bookId).then(book => {
            book.title = req.body.title;
            book.author = req.body.author;
            book.save()
            res.json(book)
        }).catch(err=>{
            console.log(err.message)
        })
    }).patch((req, res) => {
        Book.findById(req.params.bookId).then(book => {
            if (req.body._id) {
                delete req.body._id;
            }
            for (let b in req.body) {
                book[b] = req.body[b];
            }
            book.save();
            res.json(book);
        }).catch(err=>{
            console.log(err.message)
        });
    }).delete((req, res) => {
        Book.findById(req.params.bookId).then(book => {
            book.remove(err => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(204).send('removed')
                }
            });
        });
    });

    module.exports = bookRouter;