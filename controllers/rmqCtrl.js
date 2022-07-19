//const sksMdl=require('../model/sksMdl');
const RMQConn = require('amqplib');
var amqp = require('amqplib/callback_api');


exports.RMQ_Q_GETMessage = (async(req,res) => {  
    let queue_name = req.body.queue_name;  console.log(queue_name);
     //Q_Pub();
     Q_Sub(queue_name);
});


function Q_Pub(queue_name){
    amqp.connect('amqps://gourav:Dataevolve12!@b-3949b6c8-4934-45ed-9b70-06943a18fa1c.mq.ap-south-1.amazonaws.com:5671', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        channel.assertQueue(queue_name, {
            durable: false
        });
        channel.sendToQueue(queue_name, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
        });
        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
}


function Q_Sub(queue_name){
    amqp.connect('amqps://gourav:Dataevolve12!@b-3949b6c8-4934-45ed-9b70-06943a18fa1c.mq.ap-south-1.amazonaws.com:5671', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel, msg) {
            if (error1) {
                throw error1;
            }
            //var queue = 'verifierID';
            channel.assertQueue(queue_name, {durable: false });
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue_name);
            channel.consume(queue_name, function(msg) {
                console.log(" [x] Received Message: %s", msg.content.toString());
                //return  msg.content.toString();
            }, {
                noAck: true
            });        
        }); 
    });
}




