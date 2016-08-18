import ProductHandler from './handler/ProductHandler';
let productHandler = new ProductHandler();

module.exports = function routes () {
	console.log('in routes options');
    var Joi = require('joi');
    return [
        { method: 'GET', path: '/products', config: { handler: productHandler.getProducts, validate: {query: { name: Joi.string() } }} },
        { method: 'GET', path: '/products/{id}', config: { handler: productHandler.getProduct } },
        { method: 'POST', path: '/products', config: {
            handler: productHandler.addProduct,
            validate: {
				payload: {
				  id : Joi.number().required(),
				  name: Joi.string().required().min(3)
				}
			}
        } }
    ];
};

	