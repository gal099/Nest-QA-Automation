Feature: Topic search from the search bar
	This feature makes a search through the search bar

	Background: Navigates to the landing page
		Given A user is in the landing page

	Scenario: Search a topic
		When The user searchs a topic
		Then A list of results should be displayed
