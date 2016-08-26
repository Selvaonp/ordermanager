import OrderService from '../service/order';
import Promise from 'bluebird';
let orderServiceTwo = new OrderService();
let getOrderConfigAsync = Promise.promisify(orderServiceTwo.getOrderConfig, {context: orderServiceTwo});

class OrderHandler {
	constructor() {
		this.orderService = new OrderService();
//		
	}

	getOrdersForProduct = (request, reply) => {
		this.orderService.getOrdersForProduct(request.params.id)
		.then(function(product){
			reply(product);
		})
		.catch(function(err){
			reply(err);
		})	
	
	}

	addOrder = (request, reply) =>  {

		this.orderService.addOrder(request.payload)
		.then(function(product){
			reply(product);
		})
		.catch(function(err) {
			console.log('error in handler ------------->', err);
			reply(err);
		});
			
		
	}
	
	getAllOrdersProdcuts = (request, reply) =>  {

		this.orderService.getAllOrdersProdcuts()
		.then(function(allData){
			reply(allData);
		})
		.catch(function(err) {
			console.log('error in handler ------------->', err);
			reply(err);
		});
		
	}
	
	getOrderConfig = (request, reply) =>  {
		console.log('in getOrderConfig', getOrderConfigAsync);
		getOrderConfigAsync()
		.then(function(orderConfig){
			console.log('getOrderConfig response ==>', orderConfig);
			reply(orderConfig);
		})
		.catch(function(err) {
			console.log('error in handler ------------->', err);
			reply(err);
		});
	}

}

export default OrderHandler;