Feature: DEMO QA
    @QA
    Scenario Outline: Practice form test
        Given I am on practice page "https://demoqa.com/automation-practice-form"
        Then I validate page header "Practice Form"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> mobile no <mobileNo> dob <dob> and subject <sub>
        And I select hobbie <hobbie>
        And I click on submit button
        Then I got the confirmation message "Thanks for submitting the form"

        Examples:
            | fname | lname  | gender | mobileNo   | dob        | sub       | hobbie  |
            | Emma  | watson | Female | 8554099754 | 12-12-1992 | Chemistry | Reading |

    @TEST
    Scenario: Validate practice form using the json data.
        Given I am on practice page "https://demoqa.com/automation-practice-form"
        Then I validate page header "Practice Forms"
        And I fill all the mandatory details
        
    @REG
    Scenario Outline: Validate practice form using multiple json data.
    Given I am on practice page "https://demoqa.com/automation-practice-form"
    And I fill all the mandatory details from <dataTables>

    Examples:
        | dataTables| 
        | e2e/resources/formData1.json  | 
        | e2e/resources/formData2.json  | 
