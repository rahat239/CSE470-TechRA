const mongoose = require('mongoose');
const DataSchema=mongoose.Schema({
    categoryName:{type:String, unique:true , required:true},
    categoryImg:{type:String, required:true},


},
    {timeStamps:true, versionKey:false}
)
const CategoryModel=mongoose.model('Categories',DataSchema)
module.exports=CategoryModel