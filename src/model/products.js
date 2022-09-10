const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    // userId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Users",
    //     required: true
    // },
    image:{
        type: String,
        required: true
    }
}, {timestamps : true})

module.exports = mongoose.model('Products', ProductsSchema)