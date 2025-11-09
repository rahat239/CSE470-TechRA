const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    brandName : {Type:String, unique:true , required:true},
    brandImg : {type:String, required:true}
},
    {
        timestamps: true,
        versionKey: false
    }
)
const BrandModel = mongoose.model("Brands",DataSchema)
module.exports = BrandModel

