const mongoose = require(¿mongoose);
const Schema = mongoose.Schema;

const ProductSchema new Schema({
    name: String,
    sellIn: Number,
    price: Number
})

module.exports = mongoose.model('products', ProductSchema)