const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({

    img1:{type:String,required: true},
    img2:{type:String},
    img3:{type:String},
    img4:{type:String},
    img5:{type:String},
    img6:{type:String},
    price:{type:String,required:true},
    condition:{type:String,required:true},
    // item:{type:String,}
    color:{type:String},
    model:{type:String},
    authenticity:{type:String,required:true},
    features:{type:String},
    shortDes:{type:String},
    productID:{type:mongoose.Schema.Types.ObjectId}
},
    {
        timestamps:true,versionKey:false
    })

const ProductDetailsModel=mongoose.model('ProductDetails',DataSchema)

module.exports=ProductDetailsModel;