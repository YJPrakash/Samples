let {
    MongoClient
} = require('mongodb');
let options = {
    useNewUrlParser: true,
    url: "mongodb://localhost:27017",
    filterData: {
        projection: {
            _id: 0
        },
        query: {
            id: {
                $lt: 105
            }
        }
    }
};

MongoClient.connect(options.url, {
    useNewUrlParser: options.useNewUrlParser
}, (err, db) => {
    let dbo = db.db("EmployeeDB");
    let collection = dbo.collection('Employee');
    let cursor = collection.find(options.filterData.query)
    if (options.filterData.projection !== undefined) {
        cursor.project(options.filterData.projection);
    }
    // let cursor = collection.find(options.filterData.query).project(options.filterData.projection);
    // cursor = dbo.Employee.find({}, options.filterData);
    cursor.forEach(user => {
        console.log(user);
    });
    db.close();
});