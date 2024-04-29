const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
        division:{type:String}
    },
    {
        timestamps:true,versionKey:false
    })

const divisionModel=mongoose.model("divisions",DataSchema);
module.exports=divisionModel;

