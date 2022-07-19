

exports.addapplicants = ( callback) => {
    logger.debug(`DB Query:- `);

    db_read.collection("users").find({}).toArray(function(callback, docs) { 
        console.log(docs); 
        //callback(false, docs);        
        return;
  });    
}

exports.addapplicants2 = (collection, callback) => {
    var query = { name: "ram" };
    db_read.collection("users").find(query).toArray(function(callback, docs) { 
        console.log(docs); 
        //callback(false, docs);        
        return;
  });    
}


exports.insertOneData = (collection, query, callback) => {
    logger.debug(`DB Query:- , collection: ${collection}, Query: ${JSON.stringify(query)}`)
    db_write.collection(collection).insertOne(query, (err, data) => {
        callback(err, data);
    });
};







