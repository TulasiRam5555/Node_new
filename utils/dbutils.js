//const MongoClient = require('mongodb').MongoClient;


exports.execQuery = function (ConPool, Qry, cntxtDtls, values, callback) {

      if (callback && typeof callback == "function") {
            ConPool.connect("mongodb://localhost:27017/test", function(err, connection) {    // get connection from Connection Pool 
                  if (err) {
                        console.log("err:  ",err)
                        //  logger.error('error while getting connection from connection pool', err);
                        callback(err, null);
                        return err;
                  }
                  // mysql.format(Qry);
                  var monogodb = connection.db('test');
                  // Execute the query
                  monogodb.collection("users").findOne({}, function(callback, docs) { 
                        console.log(docs); 
                        //callback(false, docs);        
                        return;
                  });

                  // monogodb.collection("users").findOne({},((err,data)=>{
                  //       callback(err,data)
                  //     }));


                  // monogodb.collection("users").findOne({}, function(err, docs) { 
                  //       console.log(docs);
                  //       if (err) {  
                  //             console.log("err: ",err)    
                  //             callback(true, null); return; 
                  //       }    // Handle Query Errors          
                  //       callback(false, docs);             // Send the results back  
                  //       return;
                  // });



                  // connection.query(Qry, values, function (err, rows) {
                  //       logger.info(mysql.format(Qry, values));
                  //       connection.release();                  // Release connection back to Pool  
                  //       if (err) {  console.log("err: ",err)    
                  //       callback(true, null); return; }    // Handle Query Errors          
                  //       callback(false, rows);             // Send the results back  
                  //       return;
                  // });
            });
      } else {
            return new Promise(function (resolve, reject) {
                  ConPool.getConnection(function (err, connection) {    // get connection from Connection Pool 
                        if (err) {
                              // log.db.conError(cntxtDtls,Qry,err.code,err.fatal); 
                              reject({ "err_status": 500, "err_message": "internel server" });
                        } else {   // Execute the query
  
                              connection.query(Qry, function (err, rows) {
                                    connection.release();                  // Release connection back to Pool  
                                    if (err) {
                                          // log.db.qryError(cntxtDtls,Qry,err.code,err.fatal); 
                                          reject({ "err_status": 500, "err_message": "internal server" });
                                    } // Handle Query Errors 
                                    else {
                                          resolve(rows);                 // Send the results back  
                                    }
                              }); // End of Qry Execuiton
                        }
  
                  }); // End of get Connection
  
            }); // End of Promise
      } // End of Else
  
  };