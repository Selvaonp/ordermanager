import ProductHandler from './handler/ProductHandler';
import OrderHandler from './handler/OrderHandler';
let productHandler = new ProductHandler();
let orderHandler = new OrderHandler();

module.exports = function routes () {
	console.log('in routes options');
    var Joi = require('joi');
    return [
        { method: 'GET', path: '/product', config: { handler: productHandler.getProducts, validate: {query: { name: Joi.string() } }} },
        { method: 'GET', path: '/product/{id}', config: { handler: productHandler.getProduct } },
        { method: 'POST', path: '/product', config: {
            handler: productHandler.addProduct,
            validate: {
				payload: {
				  color : Joi.string(),
				  name: Joi.string().required().min(3)
				}
			}
        } },

        { method: 'POST', path: '/order', config: {
            handler: orderHandler.addOrder,
            validate: {
				payload: {
				  qty : Joi.number(),
				  status: Joi.string().required().min(3),
				  productId: Joi.string()
				}
			}
        } },
		{ method: 'GET', path: '/product/{id}/order', config: { handler: orderHandler.getAllOrdersProdcuts } },
		{ method: 'GET', path: '/product/order', config: { handler: orderHandler.getAllOrdersProdcuts } },
		{ method: 'GET', path: '/order/config', config: { handler: orderHandler.getOrderConfig } }				
		
		

		
    ];
};

	