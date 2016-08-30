var chai = require ('chai');
var expect =  chai.expect;
var _ = require('lodash');
module.exports = function () {
var number1, number2, sum;
  this.Given(/^I have first entered "(-?[0-9]*)" into the calculator$/, function (input, callback) {
	number1 = input;
	callback();
  });

  this.Given(/^I have second entered "(-?[0-9]*)" into the calculator$/, function (input, callback) {
	number2 = input;
	callback();
  });

  this.When(/^I press add$/, function (callback) {
	sum = _.add(_.toInteger(number1), _.toInteger(number2));
	callback();
  });
  
  this.Then(/^the result should be "(-?[0-9]*)" on the screen$/, function (sumInput, callback) {
	expect(sum).to.equal(_.toInteger(sumInput));
	callback();
  });  
};