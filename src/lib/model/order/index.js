import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let orderSchema = new mongoose.Schema({
	qty : {type: String, required : true},
	status : {type: String},
	productId : {ref : 'product', type : Schema.ObjectId, required: true}	
});

let order = mongoose.model('order', orderSchema, 'order');
module.exports = order;