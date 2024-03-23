const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        categoryName:{type:String,required:true},
        categoryImg:{type:String,required: true}
    },
    {
        timestamps:true,versionKey:false
    })
const categoryModel=mongoose.model('categories',DataSchema);

module.exports=categoryModel;