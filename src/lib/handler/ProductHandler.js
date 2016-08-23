import ProductService from '../service/product';

class ProductHandler {
	constructor() {
		this.productService = new ProductService();
	}
	
	getProducts = (request, reply) => {
		console.log('request.query.name', request.query.name);
		this.productService.getProducts(request.query.name)
		.then(function(products){
			reply(products);
		})
		.catch(function(err){
			reply(err);
		})
	}

	findProducts = (name) => {
		return this.getProducts(name);
	}

	getProduct = (request, reply) => {
		this.productService.getProduct(request.params.id)
		.then(function(product){
			reply(product);
		})
		.catch(function(err){
			reply(err);
		})	
	
	}

	addProduct = (request, reply) =>  {
		var product = {
			color:request.payload.color,
			name: request.payload.name
		};
		this.productService.addProduct(product)
		.then(function(product){
			reply('created product' + product);
		})
		.catch(function(err) {
			reply(err);
		});
			
		
	}


}

export default ProductHandler;