Feature: Access to the site
	Navigate to the website

	Scenario: A user navigate to the site
		Given That a user opens the browser
		When The user navigate to the site
		Then The user should see the landing page
