const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
        userID:{type:mongoose.Schema.Types.ObjectId},
        img: {type: String},
        division:{type:String},
        district:{type:String},
        area:{type:String}

    },
    {timestamps:true,versionKey:false}
)

const profileModel=mongoose.model("profiles",DataSchema);
module.exports=profileModel;
