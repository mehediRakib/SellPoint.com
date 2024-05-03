const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
     productName:{type:String,required:true},
     productImg:{type:String,required: true},
     price:{type:String,required:true},
     userID:{type:mongoose.Schema.Types.ObjectId},
     categoryID:{type:mongoose.Schema.Types.ObjectId},
     subcategoryID:{type:mongoose.Schema.Types.ObjectId},
     divisionID:{type:mongoose.Schema.Types.ObjectId},
     brandName:{type:String,required:true},
    },
    {
        timestamps:true,versionKey:false
    })

const ProductModel=mongoose.model('products',DataSchema);

module.exports=ProductModel;