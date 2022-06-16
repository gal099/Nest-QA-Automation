Feature: Sort the list by most voted
    This feature sort the list of the the platzi blog topic search

    Background: Navigates to the platzi blog landing page
        Given A user is in the platzi blog landing page

    Scenario: Sort the search list
        When The user searchs a blog topic
        And The user sort the list by most voted
        Then The list should be sort by most voted
