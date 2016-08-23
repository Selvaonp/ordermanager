import ProductModel from '../model/product';

class ProductService {
	addProduct = (product) => {
		let productModel = new ProductModel(product);
		let promise = productModel.save()
		.then(function(product){
			return product;		
		})
		.catch(function(err){
		  throw {message: err};
		});
		
		return promise;
	}
	
	getProducts = (productName) => {
		let query = {};
		if(productName) {
			query.name = productName;
		}
		return ProductModel.find(query).exec()
		.then(function(products){
			return products;
		}) 
		.catch(function(err){
			throw {message: err};
		})
	}
	
	getProduct = (productId) => {
		return ProductModel.findById(productId).exec()
		.then(function(product){
			return product;
		}) 
		.catch(function(err){
			throw {message: err};
		})
	}	
}

export default ProductService;