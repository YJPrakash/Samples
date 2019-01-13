let {
    connection,
    options
} = require('demo2');

let connection1 = connection.then(db => {
    let dbo = db.db("EmployeeDB");
    let collection = dbo.collection('Employee');
    return {
        db,
        collection
    };
}).catch((err) => {
    console.log("1", err.message);
});

// console.log(db)
// db.then((result) => {
//     console.log(result.collection.toArray());
// }).catch((err) => {

// });
module.exports.connection1 = connection1;
module.exports.options = options;