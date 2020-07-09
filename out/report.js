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
formatter.step({
  "line": 13,
  "name": "user checks if new address is correct",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user deletes new address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user checks if new address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user signs out",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
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
      "line": 21,
      "id": "address-page;adding-new-user-address;;1"
    },
    {
      "cells": [
        "jurandspych@mail.com",
        "Pass1234",
        "Domowy",
        "Prosta 23",
        "Szczecin",
        "70-250",
        "666777444"
      ],
      "line": 22,
      "id": "address-page;adding-new-user-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Adding new user address",
  "description": "",
  "id": "address-page;adding-new-user-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is logged in with email jurandspych@mail.com and password Pass1234",
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
formatter.step({
  "line": 13,
  "name": "user checks if new address is correct",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user deletes new address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user checks if new address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user signs out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "jurandspych@mail.com",
      "offset": 29
    },
    {
      "val": "Pass1234",
      "offset": 63
    }
  ],
  "location": "CreateNewAddressSteps.userIsLoggedIn(String,String)"
});
formatter.result({
  "duration": 4182336126,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userGoesToNewAddressPage()"
});
formatter.result({
  "duration": 332997037,
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
  "duration": 131842432,
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
  "duration": 121583572,
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
  "duration": 116525167,
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
  "duration": 104074357,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.countryIsChosenByUser()"
});
formatter.result({
  "duration": 373483717,
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
  "duration": 414608384,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userSavesNewAddress()"
});
formatter.result({
  "duration": 525565137,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userChecksIfNewAddressIsCorrect()"
});
formatter.result({
  "duration": 44082006,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userDeletesNewAddress()"
});
formatter.result({
  "duration": 472063063,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userChecksIfNewAddressIsDeleted()"
});
formatter.result({
  "duration": 24661170,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userSignsOut()"
});
formatter.result({
  "duration": 542264716,
  "status": "passed"
});
});