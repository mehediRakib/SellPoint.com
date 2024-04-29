const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
        district:{type:String},
        divisionID:{type:mongoose.Schema.Types.ObjectId}
    },
    {
        timestamps:true,versionKey:false
    })

const districtModel=mongoose.model("districts",DataSchema);
module.exports=districtModel;

