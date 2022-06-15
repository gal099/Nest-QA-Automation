Feature: Count pages for each tag
	This feature counts how many pages has the tags courses, school and lessons

	Background: A user is in the landing page
		Given A user is in the landing page

	Scenario: Count tags pages
		When The user searchs a topic
		Then The user should see the number of pages of the current tag

