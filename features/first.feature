Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Add two numbers
    Given I have first entered "50" into the calculator
    Given I have second entered "70" into the calculator
	When I press add
    Then the result should be "120" on the screen
	
  Scenario: Add two negative numbers
    Given I have first entered "-50" into the calculator
    Given I have second entered "-70" into the calculator
	When I press add
    Then the result should be "-120" on the screen