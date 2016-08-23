import ProductModel from '../model/product';
import OrderModel from '../model/order';
import _ from 'lodash';

class OrderService {
	addOrder = (order) => {
		let orderModel = new OrderModel(order);
		let promise = orderModel.save()
		.then(function(order){
			return order;		
		})
		.catch(function(err){
		  throw {message: err};
		});
		
		return promise;
	}
	
	getOrdersForProduct = (productId) => {
		let query = {};
		if(productId) {
			query.productId = productId;
		}
		console.log('query ->', query);
		return OrderModel.find(query).exec()
		.then(function(orders){
			console.log('orders ->', orders);
			return ProductModel.populate(orders, {path: 'productId'})
			
		})
		.then(function(product){
			console.log('getOrdersForProduct product ', product[0]);
			let response = {};
			response.product= product[0].productId;
			response.order = _.omit(product[0], ['productId']);
			console.log('response ', response);			
			return response
		})
		.catch(function(err){
			console.log(err);
			throw {message: err};
		})
	}
	
}

export default OrderService;