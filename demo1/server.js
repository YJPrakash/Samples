let express = require('express');

let app = express();

let server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/");
});

app.get('/Employee', (req, res) => {
    console.log(req.query);
    // console.log(req.baseUrl + req.path);
    let {
        connection1,
        options
    } = require('./server/connection1.js');
    connection1.then((obj) => {
        let {
            collection
        } = obj;
        let cursor = (options.filterData.query === undefined) ? collection.find() : collection.find(options.filterData.query);

        if (options.filterData.projection !== undefined) {
            cursor.project(options.filterData.projection);
        }

        if (req.query.limit !== undefined) {
            cursor.limit(parseInt(req.query.limit));
        }
        
        return cursor.toArray()
    }).then((user) => {
        res.send(user);
    }).catch((err) => {
        console.log(err.message);
    });
});

// let mPath = path.join(appRoot, '/cgi-bin' + req.params[0]);
// console.log(mPath);
// execFileSync(mPath);

//auth required or redirect
// app.use('/account', (req, res, next)=> {
//     console.log(req.baseUrl + req.path); // => /account

//     if (!req.session.user) {
//         res.redirect('/login?ref=' + encodeURIComponent(req.baseUrl + req.path)); // => /login?ref=%2Faccount
//     } else {
//         next();
//     }
// });

// app.get('/cgi-bin/*.cgi', (req, res) => {
//     // res.sendFile(__dirname + "/");
//     // console.log(req.originalUrl);
//     exec("/usr/lib" + req.originalUrl,
//         (stderr, stdout, errorCode) => {
//             // You get here when the executable completes
//             if (stderr) {
//                 console.log(stderr);
//                 // console.log(errorCode);
//                 throw stderr;
//             }
//             // console.log(stdout);
//             res.send(stdout);
//         });

//     // const child = execFile("/usr/lib" + req.originalUrl, [parameters], (error, stdout, stderr) => {
//     //     // You get here when the executable completes
//     //     if (error) {
//     //         console.log(error);
//     //         throw error;
//     //     }
//     //     console.log(stdout);
//     //     res.send(stdout);
//     // });

// });

// app.get('/es6', (req, res)=> {
//     res.sendFile(__dirname + "/DATA/ES6.txt");
// });