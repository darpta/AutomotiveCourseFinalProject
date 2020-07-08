$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/create-new-address.feature");
formatter.feature({
  "line": 1,
  "name": "Address Page",
  "description": "",
  "id": "address-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Adding new user address",
  "description": "",
  "id": "address-page;adding-new-user-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is logged in with email \u003cemail\u003e and password \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user goes to new address page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "alias \u003calias\u003e is provided by user",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "address \u003caddress\u003e is provided by user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "city \u003ccity\u003e is provided by user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "postalCode \u003cpostalCode\u003e is provided by user",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "country United Kingdom is chosen by user",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "phone number \u003cphone\u003e is provided by user",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user saves new address",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "address-page;adding-new-user-address;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "alias",
        "address",
        "city",
        "postalCode",
        "phone"
      ],
      "line": 16,
      "id": "address-page;adding-new-user-address;;1"
    },
    {
      "cells": [
        "jandworak@mail.com",
        "Pass123",
        "Domowy",
        "Prosta 23",
        "Szczecin",
        "70-250",
        "666777444"
      ],
      "line": 17,
      "id": "address-page;adding-new-user-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Adding new user address",
  "description": "",
  "id": "address-page;adding-new-user-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is logged in with email jandworak@mail.com and password Pass123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user goes to new address page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "alias Domowy is provided by user",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "address Prosta 23 is provided by user",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "city Szczecin is provided by user",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "postalCode 70-250 is provided by user",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "country United Kingdom is chosen by user",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "phone number 666777444 is provided by user",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user saves new address",
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
  "location": "CreateNewAddressSteps.userIsLoggedIn(String,String)"
});
formatter.result({
  "duration": 3024411164,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userGoesToNewAddressPage()"
});
formatter.result({
  "duration": 327307969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Domowy",
      "offset": 6
    }
  ],
  "location": "CreateNewAddressSteps.aliasAliasIsProvidedByUser(String)"
});
formatter.result({
  "duration": 66553033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prosta 23",
      "offset": 8
    }
  ],
  "location": "CreateNewAddressSteps.addressIsProvidedByUser(String)"
});
formatter.result({
  "duration": 66926524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Szczecin",
      "offset": 5
    }
  ],
  "location": "CreateNewAddressSteps.cityIsProvidedByUser(String)"
});
formatter.result({
  "duration": 64332948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70-250",
      "offset": 11
    }
  ],
  "location": "CreateNewAddressSteps.postalCodeIsProvidedByUser(String)"
});
formatter.result({
  "duration": 54961299,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.countryIsChosenByUser()"
});
formatter.result({
  "duration": 356008214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "666777444",
      "offset": 13
    }
  ],
  "location": "CreateNewAddressSteps.phoneNumberIsProvidedByUser(String)"
});
formatter.result({
  "duration": 312365388,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userSavesNewAddress()"
});
formatter.result({
  "duration": 486213211,
  "status": "passed"
});
});