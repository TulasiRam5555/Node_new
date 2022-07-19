const applicantsMdl = require('../models/applicantsMdl');

exports.addapplicants = (async (req, res) => {
    
    applicantsMdl.addapplicants2(async (err, userdata) => {
      if (err) {
        logger.error('Error While Getting login Data ', err);
        res.send({ "code": stdCodes.message.serverError.code, "message": stdCodes.message.serverError.message });
      }
      else{
      res.send({ code: stdCodes.message.success.code,message: 'Status changes updated successfully '})
      return;
      }
  
    });
  
  });




