Feature: Most voted blog topic name and likes
    This feature returns the name and likes of the most voted blog post

    Background: Navigates to the platzi blog landing page
        Given A user is in the platzi blog landing page

    Scenario: Get the name and likes
        When The user searchs a blog topic
        And The user sorts the list by most voted
        Then The name and likes of the first one should be displayed
