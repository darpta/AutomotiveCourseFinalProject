$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/buy-product.feature");
formatter.feature({
  "line": 1,
  "name": "User buys product",
  "description": "",
  "id": "user-buys-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Logged in user buys sweater",
  "description": "",
  "id": "user-buys-product;logged-in-user-buys-sweater",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is logged in with email \u003cemail\u003e and password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user chooses product \u003cproductName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user chooses size of product",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user chooses quantity of product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user adds products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user goes to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user chooses shipping method as PrestaShop",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user chooses payment method as Pay by Check",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user chooses order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user does a print screen",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-buys-product;logged-in-user-buys-sweater;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "productName"
      ],
      "line": 16,
      "id": "user-buys-product;logged-in-user-buys-sweater;;1"
    },
    {
      "cells": [
        "jandworak@mail.com",
        "Pass123",
        "Hummingbird printed sweater"
      ],
      "line": 17,
      "id": "user-buys-product;logged-in-user-buys-sweater;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Logged in user buys sweater",
  "description": "",
  "id": "user-buys-product;logged-in-user-buys-sweater;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is logged in with email jandworak@mail.com and password Pass123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user chooses product Hummingbird printed sweater",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user chooses size of product",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user chooses quantity of product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user adds products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user goes to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user chooses shipping method as PrestaShop",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user chooses payment method as Pay by Check",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user chooses order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user does a print screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "jandworak@mail.com",
      "offset": 29
    },
    {
      "val": "Pass123",
      "offset": 61
    }
  ],
  "location": "BuyProductSteps.userIsLoggedIn(String,String)"
});
formatter.result({
  "duration": 3626432219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird printed sweater",
      "offset": 21
    }
  ],
  "location": "BuyProductSteps.userGoesToAllProducts(String)"
});
formatter.result({
  "duration": 1386389195,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userChoosesSizeSizeOfProduct()"
});
formatter.result({
  "duration": 399996651,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userChoosesQuantityQuantityOfProduct()"
});
formatter.result({
  "duration": 410353533,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userAddsProductsToTheCart()"
});
formatter.result({
  "duration": 85689422,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userGoesToCheckout()"
});
formatter.result({
  "duration": 2228013598,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userConfirmsAddress()"
});
formatter.result({
  "duration": 974107793,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userChoosesShippingMethodAsPrestaShop()"
});
formatter.result({
  "duration": 27026,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userChoosesPaymentMethodAsPayByCheck()"
});
formatter.result({
  "duration": 32270,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userChoosesOrderWithAnObligationToPay()"
});
formatter.result({
  "duration": 42759,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductSteps.userDoesAPrintScreen()"
});
formatter.result({
  "duration": 77304,
  "status": "passed"
});
});