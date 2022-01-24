import {Given,When,Then} from '@wdio/cucumber-framework'
import practicepage from '../pageObjects/practiceFormPage'
import data from '../resources/formData.json'
import fs from 'fs'

    Given(/^I am on practice page \"([^\"]*)\"$/, async function (url) {
      await browser.url(url);
      await browser.maximizeWindow();
    });
    
    Then(/^I validate page header \"([^\"]*)\"$/, async function (headerText) {
     await expect(await practicepage.header).toHaveText(headerText);
    });
    When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname, lname) {
      await practicepage.fname.setValue(fname);             //setvalue clears the field first , add value directly enters the value
      await practicepage.lname.addValue(lname);

    });
  
    When(/^I select gender (.+) mobile no (.+) dob (.+) and subject (.+)$/, async function (gender, mobileno, dob, sub) {
      await practicepage.selectGender(gender);
      await practicepage.mobNo.setValue(mobileno);
      (await practicepage.sub).addValue(sub);
      await browser.pause(2000);
      await browser.keys('\uE007'); 

      });
  
    When(/^I select hobbie (.+)$/, async function (hobbie) {
      await practicepage.selectHobiee(hobbie);
      });
  
    When(/^I click on submit button$/, async function () {
      await practicepage.btnsub.scrollIntoView();
     await practicepage.btnsub.click();
      await browser.pause(5000);
    });

    Then(/^I got the confirmation message \"([^\"]*)\"$/, async function (headerText) {
      await expect(practicepage.confirmatiom_msg).toHaveText(headerText);
    });

    Then(/^I fill all the mandatory details$/, async ()=> {
      await practicepage.setName(data.firstName,data.lastname);
      await practicepage.setEmail(data.email);
      await practicepage.setMobile(data.mobileNumber);
      await practicepage.setSubject(data.subject);
      await browser.pause(3000);
     
      
    });
    When(/^I fill all the mandatory details from (.+)$/, async function (datatable:string) {
      
      let data= fs.readFileSync(datatable,"utf-8");
      let testData= JSON.parse(data);
      await practicepage.setName(testData.firstName,testData.lastname);
      await practicepage.setEmail(testData.email);
      await practicepage.setMobile(testData.mobileNumber);
      await practicepage.setSubject(testData.subject);
      await browser.pause(3000);


      });
  