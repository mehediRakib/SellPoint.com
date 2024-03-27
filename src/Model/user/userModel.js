const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    email: {type: String,unique:true,trim:true},
    contact:{type:String},
    otp:{type:String},
    name:{type:String},
    pass:{type:String,required:true},
    role:{type:String},
    confirmPass:{type:String}
},
    {
        timestamps:true,versionKey:false
    })

const userModel=mongoose.model("users",DataSchema);
module.exports=userModel;

