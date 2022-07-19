const clientsMdl = require('../models/clientsMdl');

exports.addclients = (async (req, res) => {    
    clientsMdl.addclients(async (err, userdata) => {
      if (err) {
        logger.error('Error While Getting login Data ', err);
        res.send({ "code": stdCodes.message.serverError.code, "message": stdCodes.message.serverError.message });
      }
      else{
      res.send({ code: stdCodes.message.success.code,message: 'Client Added successfully',data:userdata})
      //return;
      }  
    });  
});

exports.editclients = (async (req, res) => {    
    clientsMdl.editclients(async (err, userdata) => {
      if (err) {
        logger.error('Error While Getting login Data ', err);
        res.send({ "code": stdCodes.message.serverError.code, "message": stdCodes.message.serverError.message });
      }
      else{
      res.send({ code: stdCodes.message.success.code,message: 'Client Updated successfully',data:userdata})
      //return;
      }  
    });  
});

exports.listclients = (async (req, res) => {    
    clientsMdl.listclients(async (err, userdata) => {
        if (err) {
          logger.error('Error While Getting login Data ', err);
          res.send({ "code": stdCodes.message.serverError.code, "message": stdCodes.message.serverError.message });
        }
        else{
        res.send({ code: stdCodes.message.success.code,message:'List of Clients',data:userdata})
        //return;
        }  
    });  
});