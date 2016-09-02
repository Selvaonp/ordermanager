var chai = require ('chai');
var expect =  chai.expect;
var _ = require('lodash');
var request = require('request');
module.exports = function () {

   this.Given(/^I have a "([^"]*)" with key "([^"]*)" with value "([^"]*)"$/, function (model, key, value, callback) {
	  if(!this[model] || this[model]._id) this.product={};
	  this[model][key] = value;
	 callback();
  });
  
  this.Given(/^I create a "([^"]*)"$/, function (model, callback) {
  var me=this;
	request({
		url: 'http://localhost:9000/'+ model, //URL to hit
		method: 'POST',
		//Lets post the following key/values as form
		json: this[model]
	}, function(error, response, body){
		if(error) {
			console.log(error);
			me.error = error;
			callback(error);
		} else {
			console.log(response.statusCode, body);
			me.statusCode = response.statusCode;
			me.response = body;
			me[model] = body;
			callback();
		}

	});	

  });

  this.When(/^I get a status 200 response$/, function (callback) {
	expect(this.statusCode).to.equal(200);
	callback();
  });
  
  this.Then(/^the response object contains key "([^"]*)"$/, function (key, callback) {
	expect(this.response).to.include.keys(key);
	callback();
  });  
  
  
  this.Then(/^the response object contains key "([a-zA-Z0-9]*)" with value "([a-zA-Z0-9]*)"$/, function (key, value, callback) {
	expect(this.response).to.have.property(key, value);
	callback();
  });
  
  };