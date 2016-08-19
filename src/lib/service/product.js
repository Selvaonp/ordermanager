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
}

export default ProductService;