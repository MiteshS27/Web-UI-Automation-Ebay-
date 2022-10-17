Feature: Test for ebay home page

    @ebayScenario
    Scenario: validate ebay home page
        When I am ebay home page
        Then I validate ebay home page

    @ebayScenario
    Scenario Outline: Perform simple search on home page - Search keyword : <search keyword>
        Given I am ebay home page
        When I perform simple search "<search keyword>"
        Then I verify the simple seach result for "<search keyword>"

        Examples:
            | search keyword |
            | mobile         |
            | kids toys      |