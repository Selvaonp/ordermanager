import OrderService from '../service/order';

class OrderHandler {
	constructor() {
		this.orderService = new OrderService();
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


}

export default OrderHandler;