Feature: Search a topic in the platzi blog
    This feature search a topic in the platzi blog

    Background: Navigates to the platzi blog landing page
        Given A user is in the platzi blog landing page

    Scenario: Platzi blog topic search
        When The user searchs a blog topic
        Then A list of post should be displayed