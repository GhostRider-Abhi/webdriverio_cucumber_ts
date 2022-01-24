Feature: Chai page

    Scenario Outline: Test chai form
        Given I am on practice page "https://demoqa.com/automation-practice-form"
        Then I validate page header "Practice Forrm"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> mobile no <mobileNo> dob <dob> and subject <sub>
        And I select hobbie <hobbie>
        And I click on submit button
        Then I got the confirmation message "Thanks for submitting the form"

        Examples:
            | fname | lname  | gender | mobileNo   | dob        | sub       | hobbie  |
            | Emma  | watson | Female | 8554099754 | 12-12-1992 | Chemistry | Reading |