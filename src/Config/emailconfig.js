const nodemailer= require('nodemailer');

const { EMAIL_ID,PASSWORD }=require('./serverconfig');

const sender=nodemailer.createTransport({
    service: "gmail",
    auth :{
        user:EMAIL_ID,
        pass: PASSWORD

    }
})
 

module.exports=sender;