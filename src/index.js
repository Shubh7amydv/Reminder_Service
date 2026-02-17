const express=require('express');
const bodyparser=require('body-parser');

const { PORT } = require('./Config/serverconfig');
const cron = require('node-cron');

const { sendBasicEmail }=require('./Services/email-services')


const setUpAndStartServer = () =>{
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));


  
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });

    // ✅ Cron Job Setup
    cron.schedule('* * * * *', async () => {
        console.log("⏰ Running cron job...");

        await sendBasicEmail(
            "",
            "Cron Email",
            "This email is sent every minute"
        );
    });

}

setUpAndStartServer();
