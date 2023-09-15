const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true,"Please Enter Product Name"],

        },
        quantity : {
            type : Number,
            required : true,
            default : 0
        },
        price : {
            type : Number,
            required : true,
        },
        image : {
            type : String,
            required : true
        }
    },
    {
        timeStamps : true
    } 
)

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
