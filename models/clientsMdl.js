exports.addclients = (callback) => {
    var query = { item: "envelopes", qty : 100, type: "Clasp" };
    db_read.collection("users").insertOne(query,function(err, docs) { 
      //console.log(docs);      
      callback(false, docs);    
      return;    
   });
};

exports.editclients = (callback) => {
  //var query = '{name: "ram"}, {$set: {name: "ramfff" }}';
  db_read.collection("users").updateOne({name: "ram"}, {$set: {name: "ramfff" }},function(err, docs) { 
    //console.log(docs);      
    callback(false, docs);    
    return;    
 });
};

exports.listclients = (callback) => {
  var query = { name: "ramfff" };
  db_read.collection("users").find(query).toArray(function(err, docs) { 
     //console.log(docs);      
     callback(false, docs);    
     return;    
  });    
};