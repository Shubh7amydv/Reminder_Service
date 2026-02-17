const express=require('express');
const bodyparser=require('body-parser');

const { PORT } = require('./Config/serverconfig');


const setUpAndStartServer = () =>{
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));


    app.listen(PORT, () =>{
        console.log(`server started at ${PORT}`);
    });
}

setUpAndStartServer();
