 	

class ProductHandler {
	constructor() {
		this.products = [{
			   id: 1,
			   name: 'Guitar'
		   },
		   {
			   id: 2,
			   name: 'Banjo'
		   }
		]; 			
	}
	
	getProducts = (request, reply) => {
		console.log('request.query.name', request.query.name);
		if (request.query.name) {
			reply(this.findProducts(request.query.name));
		} else {
			reply(this.products);
		}
	}

	findProducts = (name) => {
		return this.products.filter(function(product) {
			return product.name.toLowerCase() === name.toLowerCase();
		});
	}

	getProduct = (request, reply) => {
		var product = this.products.filter(function(p) {
			return p.id == request.params.id;
		}).pop();

		reply(product);
	}

	addProduct = (request, reply) =>  {
		var product = {
			id: products[products.length - 1].id + 1,
			name: request.payload.name
		};

		this.products.push(product);

		reply('created product' + product);
	}


}

export default ProductHandler;