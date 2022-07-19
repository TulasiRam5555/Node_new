const express = require('express');
const app = express();

global.stdCodes = require('./config/error_codes');//Error Codes Config File
const bodyParser = require('body-parser');

global.validate = require('express-validation');




global.logger = require('./config/logger');

global.nosqldb = require('./config/dbconnect');//To establish a connection to particular DB
global.dbutil = require('./utils/dbutils');//Execute Query

//global.mongodbs =  require('mongodb');

//var mongodb = require('mongodb');
//global.monogodb
//var monogodb;


//app.use(useragent.express());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', function (req, res) {
  res.send("Test Portal API Auth");
});

let server = app.listen(3000, function () {
  let [host,port]= [server.address().address,server.address().port];
  logger.debug('Test Portal server is listening at http://%s:%s', host, port);
});




// var MongoClient = require('mongodb').MongoClient;
// // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/test", function(err, database) {
//   if(err) throw err;
//   monogodb = database.db('test');
//   var docs;
//   var coll = monogodb.collection("users").findOne({}, function(err, docs) { console.log(docs);});
//   console.log(docs);
//   //monogodb.collection('users')
//   // Start the application after the database connection is ready
//   app.listen(3000);
//   console.log("Listening on port 3000");
// });



// Reuse database object in request handlers

// app.get("/", function(req, res) {  
//     monogodb.collection("users").findOne({}, function(err, docs) {
//     //docs.each(function(err, doc) {
//       if(docs) {
//         console.log(docs);
//         res.send(docs);
//       }
//       else {
//         res.end();
//       }
//    // });
//   });
// });

















// const initializeDatabases = require('./dbs')
// const routes = require('./routes')

// let server = sqldb().then(dbs => {
//   // Initialize the application once database connections are ready.
//   routes(app, dbs).listen(3000, () => console.log('Listening on port 3000'))
// }).catch(err => {
//   console.error('Failed to make all database connections!')
//   console.error(err)
//   process.exit(1)
// })


// dbService.connect(err => {
//   if (err) {
//     console.log("Error: ", err);
//     process.exit(1);
//   }

//   server.listen(config.port, () => {
//     console.log(`Api runnning at ${config.port}`);
//   });
// });


app.use('/', require('./routes/routes'));
app.use((err, req, res, next) => {
  if (err instanceof validate.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }
});

app.use(logErrors);
function logErrors(err, req, res, next) {
  logger.error(err.stack);
  next(err);
}

global.path = require('path');
global.async = require('async');




app.use(function (req, res, next) {
  logger.info("Requested URL : ", req.url);
  logger.info(req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,authorization,user_id');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method || req.url == '/favicon.ico') {
    return res.status(200).send('OK');
  } else {
    next();
  }
});

