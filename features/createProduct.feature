Feature: Create product feature
  As a user of order manager 
  I want to create a product
  So that I can store the product in mongodb

  Scenario: Create a new product
	Given I have a "product" with key "color" with value "red"
	Given I have a "product" with key "name" with value "Macafee"	
    When I create a "product"
    Then I get a status 200 response
	And the response object contains key "_id"
	And the response object contains key "color"
	And the response object contains key "name" with value "Macafee"
 