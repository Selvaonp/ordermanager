var chai = require ('chai');
var expect =  chai.expect;
var _ = require('lodash');
module.exports = function () {

  this.Given(/^I have first entered "(-?[0-9]*)" into the calculator$/, function (input, callback) {
  this.number1=input;
	callback();
  });

  this.Given(/^I have second entered "(-?[0-9]*)" into the calculator$/, function (input, callback) {
	this.number2 = input;
	callback();
  });

  this.When(/^I press add$/, function (callback) {
	this.sum = _.add(_.toInteger(this.number1), _.toInteger(this.number2));
	callback();
  });
  
  this.Then(/^the result should be "(-?[0-9]*)" on the screen$/, function (sumInput, callback) {
	expect(this.sum).to.equal(_.toInteger(sumInput));
	callback();
  });  
};