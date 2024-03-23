const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    division:{type:String,required:true},
    district:{type:String,required:true},
    area:{type:String,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId}
},
    {
        timestamps:true,versionKey:false
    })

const ProductLocationModel=mongoose.model('productlocations',DataSchema);
module.exports=ProductLocationModel;