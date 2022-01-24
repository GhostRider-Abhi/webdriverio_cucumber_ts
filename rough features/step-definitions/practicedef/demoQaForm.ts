import {Given,When,Then} from '@wdio/cucumber-framework'
    Given(/^I am on practice page \"([^\"]*)\"$/, async function (url) {
      await browser.url(url);
      await browser.maximizeWindow();
    });
    
    Then(/^I validate page header \"([^\"]*)\"$/, async function (headerText) {
      const header= await $('.main-header');
      await expect(header).toHaveText(headerText);
    });
    When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname, lname) {
      const first_name=$('#firstName');
      const last_name=$('#lastName');
      await first_name.setValue(fname);             //setvalue clears the field first , add value directly enters the value
      await last_name.addValue(lname);

    });
  
    When(/^I select gender (.+) mobile no (.+) dob (.+) and subject (.+)$/, async function (gender, mobileno, dob, sub) {
      const avaGender= $$('[name="gender"]');
      for(let i=0;i<await avaGender.length;i++){
        const getAtt= await avaGender[i].getAttribute('value');
        if(getAtt===gender){
          await (await avaGender[i]).doubleClick();
          break;
        }
      }
      const mobNo = $('[placeholder="Mobile Number"]');
      await mobNo.setValue(mobileno);
      
      //const doB= $('#dateOfBirthInput');
      //(await doB).addValue(dob);
      // (await doB).clearValue();
      // (await doB).setValue(dob)
      

      //await browser.pause(10000);

      const subject=$('input#subjectsInput');
      (await subject).addValue(sub);
      await browser.pause(2000);
      await browser.keys('\uE007'); 

      });
  
    When(/^I select hobbie (.+)$/, async function (hobbie) {
        const hob= $$('.custom-checkbox .custom-control-label');
      for (let index = 0; index < await hob.length; index++) {
        if(await hob[index].getText()===hobbie){
          await hob[index].click();
        }
      }
       
      });
  
    When(/^I click on submit button$/, async function () {
      const btnSub=$('[type="submit"]');
      (await btnSub).scrollIntoView();
      (await btnSub).click();
      await browser.pause(5000);
    });

    Then(/^I got the confirmation message \"([^\"]*)\"$/, async function (headerText) {
      const header= await $('.modal-title');
      await expect(header).toHaveText(headerText);
    });
  