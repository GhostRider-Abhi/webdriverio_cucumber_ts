Feature: The Internet Guinea Pig Website

    Scenario Outline: As a user, I can open internet website

        Given I open the browser and load the url<homepageUrl>
        Then I should see a header with text message saying <message>

        Examples:
            | homepageUrl                         | message|
            | https://the-internet.herokuapp.com/ | Welcome to the-internet|

