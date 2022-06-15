Feature: Amount of opinions of a course
    This feature gets and shows the amount of opinions of a course

    Background: Navigates to the landing page
        Given A user is in the landing page

    Scenario: Show the first topic comments amount
        When The user searchs a topic
        And The user enters to the first topic
        Then The comments amount should be displayed