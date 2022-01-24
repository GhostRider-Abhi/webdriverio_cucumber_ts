import{Given,Then} from '@wdio/cucumber-framework'


Given(/^I open the browser and load the url(.+)$/, async function (homepageurl) {
    browser.url(homepageurl);
    browser.maximizeWindow();
  });

Then(/^I should see a header with text message saying (.+)$/, async function (message) {
    const header= await $('.heading');
    console.log('header',header);
    console.log('message',message);
    expect(await header.getText()).toEqual(message);
  }); 