const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({  //set schema

    name: {
        type: String,
        trim: true,
        require: true
    },

    img: {
        type: String,
        require: true,
        trim: true,
    },

    price: {
        type: Number,
        min: 0,
        default: 0
    },

    desc: {
        type: String,
        trim: true
    }
})

const Product = mongoose.model('Product', productSchema);//made a model with the help of 

module.exports = Product;