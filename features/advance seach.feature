Feature: Test advance serach features in Ebay website

    @ebayScenario
    Scenario Outline: Perform ebay advance keywords search: <search keyword>
        Given I am ebay home page
        When I perform advance search using keyword "<search keyword>" and item category "<category>"
        Then I verify the advance seach result for "<search keyword>" and item category "<category>"

        Examples:
            | search keyword | category                      |
            | mobile         | Electronics                   |
            | pant           | Clothing, Shoes & Accessories |

    @ebayScenario
    Scenario Outline: Perform ebay advance search and look for expected product - THIS TEST IS BUILD TO DEMONSTRATE FAILED SCENARIO
        Given I am ebay home page
        When I perform advance search using keyword "<search keyword>" and item category "<category>"
        Then I see the product "<product>" listed in search result
        Examples:
            | search keyword | category    | product        |
            | mobile         | Electronics | Error scenario |

