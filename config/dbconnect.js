// const mysql = require('mysql');
// const USER = 'gailgas';
// const PWD = 'Gailgas@123';
// const DATABASE = 'gailcorintra';
// const DB_HOST_NAME = '3.109.11.231';
// const MAX_POOL_SIZE = 100;
// const MySQLConPool = mysql.createPool({
//     host: DB_HOST_NAME,
//     user: USER,
//     password: PWD,
//     port:"3306",
//     database: DATABASE,
//     connectTimeout: 20000,
//     connectionLimit: MAX_POOL_SIZE,
//     debug: false,
//     timezone : 'utc',
//     multipleStatements: true
// });

// exports.MySQLConPool = MySQLConPool;




// const MongoClient = require('mongodb').MongoClient;


// const MongoConPool = MongoClient.connect('mongodb://localhost/test');
  
// exports.MongoConPool = MongoClient;






const MongoClient = require('mongodb').MongoClient;




let mongodb_write;

async function connect(callback) {
    MongoClient.connect('mongodb://localhost/test', (err, db) => {
        // console.log('!!!!!!',err.MongoServerSelectionError)
        if (err) {
            // new MongoError(err)
            callback(err, null)
        } else {
            mongodb_write = db.db();
            callback(err, mongodb_write);
        }
    });
}

connect(async (err, client) => {
    if (err) {
        logger.error('Write MongoDb Connection fail');
        global.db_write = "err";
    }
    else {
        logger.info('Wirite MongoDb connected successfully....!');
        global.db_write = client;
    }

});

// Db connection for Read operations 


let mongodb_read_db;

async function connect(callback) {
    MongoClient.connect('mongodb://localhost/test', (err, db) => {
        // console.log('!!!!!!',err.MongoServerSelectionError)
        if (err) {
            // new MongoError(err)
            callback(err, null)
        } else {
            mongodb_read_db = db.db();
            callback(err, mongodb_read_db);
        }
    });
}

connect(async (err, client) => {
    if (err) {
        logger.error('Read MongoDb Connection fail');
        global.db_read = "err";
    }
    else {
        logger.info('Read MongoDb connected successfully....!');
        global.db_read = client;
    }

});


// exports.dbconnect=dbconnect;