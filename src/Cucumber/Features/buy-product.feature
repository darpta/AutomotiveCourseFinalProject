Feature: User buys product
  Scenario Outline: Logged in user buys sweater
    Given user is logged in with email <email> and password <password>
    When user chooses product <productName>
    And user chooses size of product
    And user chooses quantity of product
    And user adds products to the cart
    And user goes to checkout
    And user confirms address
    And user chooses shipping method as PrestaShop
    And user chooses payment method as Pay by Check
    And user chooses order with an obligation to pay
    And user does a print screen

    Examples:
      |email              |password |productName                  |
      |jandworak@mail.com |Pass123  |Hummingbird printed sweater  |