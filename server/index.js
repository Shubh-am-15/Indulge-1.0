const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(express.json());
app.listen(3000,function(){
    console.log("running");
});

