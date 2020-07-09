Feature: Address Page

  Scenario Outline: Adding new user address
    Given user is logged in with email <email> and password <password>
    When user goes to new address page
    And alias <alias> is provided by user
    And address <address> is provided by user
    And city <city> is provided by user
    And postalCode <postalCode> is provided by user
    And country United Kingdom is chosen by user
    And phone number <phone> is provided by user
    And user saves new address
    And user checks if new address is correct
    And user deletes new address
    And user checks if new address is deleted
    And user signs out



    Examples:
      |email              |password |alias   |address     |city     |postalCode |phone      |
      |jurandspych@mail.com |Pass1234  |Domowy  |Prosta 23   |Szczecin |70-250     |666777444  |