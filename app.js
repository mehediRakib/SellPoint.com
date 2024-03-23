const express=require('express');
const app=new express();

const hpp=require('hpp');
const helmet=require('helmet');
const cors=require('cors');
const expressRateLimit=require('express-rate-limit');
const mongoSanitize=require('express-mongo-sanitize');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const path=require('path');
const mongoose=require('mongoose');
const router=require('./src/Router/api');

//security Middleware implementation
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

//RateLimit Implementation

const limiter=expressRateLimit({
    windowMs:15*60*1000,
    limit:100,
})
app.use(limiter);


//Database Connection

const URL="mongodb+srv://<username>:<password>@cluster0.75qh3yi.mongodb.net/BikroyCom?retryWrites=true&w=majority"
const option={
    user:'rakib107054',
    pass:'rakib172561',
    autoIndex:true
}

mongoose.connect(URL,option).then(()=>{
    console.log("Database connection successfull");
}).catch((e)=>{
    console.log(e);
})


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

app.set('etag',false);
app.use('/api/v1',router);







module.exports=app;


