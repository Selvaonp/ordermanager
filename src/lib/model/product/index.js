import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let productSchema = new mongoose.Schema({
	name : {type: String, required : true},
	color : {type: String}
});

let product = mongoose.model('product', productSchema, 'product');
module.exports = product;