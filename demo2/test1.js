let {
    MongoClient
} = require('mongodb');
// let {
//     fs
// } = require('fs');

let options = {
    useNewUrlParser: true,
    url: "mongodb://localhost:27017",
    filterData: {
        projection: {
            "_id": 0
        },
        query: {
            id: {$lt: 105}
        }
    }
};


module.exports.options = options;
module.exports.connection = MongoClient.connect(options.url, {
    useNewUrlParser: options.useNewUrlParser
});

// MongoClient.connect(options.url, {
//     useNewUrlParser: options.useNewUrlParser
// }).then(db => {
//     let dbo = db.db("EmployeeDB");
//     let collection = dbo.collection('Employee');
//     return {
//         cursor: collection.find({}, options.filterData),
//         db: db
//     };
// }).then((obj) => {
//     let {
//         cursor,
//         db
//     } = obj;
//     cursor.toArray().then(user => {
//         // console.log(user)
//         // res.send(user);
//         fs.writeFile('Employee.json', user);
//     }).catch((err) => {
//         console.log("2", err.message);
//     });
//     db.close();
// }).catch((err) => {
//     console.log("1", err.message);
// });