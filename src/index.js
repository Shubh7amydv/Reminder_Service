const express=require('express');
const bodyparser=require('body-parser');

const { PORT }= require('./Config/serverConfig.js')

const setUpAndStartServer = () =>{
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));


    app.listen(PORT, () =>{
        console.log(`server started at ${PORT}`);
    });
}

setUpAndStartServer();
