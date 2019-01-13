var mongoose = require('mongoose');

var Author = require('./models/author');
var Book = require('./models/book');

// mongoose.connect('mongodb://localhost/mongoose_basics', {
//         useNewUrlParser: true
//     },
//     function (err) {
//         if (err) throw err;

//         console.log('Successfully connected');

//         var jamieAuthor = new Author({
//             _id: new mongoose.Types.ObjectId(),
//             name: {
//                 firstName: 'Jamie',
//                 lastName: 'Munro'
//             },
//             biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
//             twitter: 'https://twitter.com/endyourif',
//             facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
//         });

//         jamieAuthor.save(function (err) {
//             if (err) throw err;

//             console.log('Author successfully saved.');

//             var mvcBook = new Book({
//                 _id: new mongoose.Types.ObjectId(),
//                 title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
//                 author: jamieAuthor._id,
//                 ratings: [{
//                     summary: 'Great read'
//                 }]
//             });

//             mvcBook.save(function (err) {
//                 if (err) throw err;

//                 console.log('Book successfully saved.');
//             });

//             var knockoutBook = new Book({
//                 _id: new mongoose.Types.ObjectId(),
//                 title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
//                 author: jamieAuthor._id
//             });

//             knockoutBook.save(function (err) {
//                 if (err) throw err;

//                 console.log('Book successfully saved.');
//             });
//         });
//     });

mongoose.connect('mongodb://localhost/mongoose_basics', {
        useNewUrlParser: true
    },
    function (err) {
        if (err) throw err;

        console.log('Successfully connected');

        Book.find({
                title: /mvc/i
            }).sort('-created')
            .limit(5)
            .exec(function (err, books) {
                if (err) throw err;

                console.log(books);
            });

        Author.findById('5c376e0f3de1400456b9e6ed', function (err, author) {
            if (err) throw err;

            author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';

            author.save(function (err) {
                if (err) throw err;

                console.log('Author updated successfully');
            });
        });

        Author.findByIdAndUpdate('5c376e0f3de1400456b9e6ed', {
            linkedin: 'https://www.linkedin.com/in/jamie-munro-8064ba1a/'
        }, function (err, author) {
            if (err) throw err;

            console.log(author);
        });
    });