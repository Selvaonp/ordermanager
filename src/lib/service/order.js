import ProductModel from '../model/product';
import OrderModel from '../model/order';
import _ from 'lodash';
import async from 'async';
import Promise from 'bluebird';

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
	
	getAllOrdersProdcuts = () => {
	   let orderPromise =  new Promise(function (resolve, reject) {
			async.parallel([
				function(callback){ 
					callback(null, [{name: "Product A", description: "Desc for ProductA"},{name: "Product B", description: "Desc for ProductB"}]);
				},
				function(callback){ 
					callback(null, [{qty: 50, status: "Pending"},{qty: 70, status: "Completed"}]);			
				}
			], function(err, results) {
				console.log('results----->', results);
				if(err) reject(err);
				resolve(results);
				//callback(null, results);
				
			});	   
		});
		return orderPromise;
	}

	getOrderConfig = () => {
		let response = {config: {a:1, b:2}};
		console.log('in getOrderConfig service class', response);
		return response;
	}
	
}

export default OrderService;