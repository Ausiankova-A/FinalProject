const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');

const {
  expect,
} = require('chai');
const {
  PageFactory,
} = require('../pageobjects/pageFactory');

Given(/^I navigate to the "(.*)" page$/, async (page) => {
  await browser.url(page);
  await browser.deleteCookies();
  await browser.setWindowSize(1920, 1580);
});
When('I click on {locator} button', async function (selector) {
  await $(selector).click();
});
When('I delete item from the cart', async function () {
  await $(PageFactory['Cart']['Delete Item Button']).waitForClickable();
  await $(PageFactory['Cart']['Delete Item Button']).click();
  await $(PageFactory['Cart']['Deletion Confirmation Button']).waitForClickable();
  await $(PageFactory['Cart']['Deletion Confirmation Button']).click();
});
When('I move item to favorites', async function () {
  await $(PageFactory['Cart']['Move To Favorites Button']).waitForClickable();
  await $(PageFactory['Cart']['Move To Favorites Button']).click();
  await $(PageFactory['Cart']['Confirmation Move To Favorites Button']).waitForClickable();
  await $(PageFactory['Cart']['Confirmation Move To Favorites Button']).click();
});
When('I click on element {locator position}{locator}', async function (locatorOptions, locator) {
  await $$(locator)[locatorOptions.position].click();
});
When('I scroll to the {locator}', async function (selector) {
  await $(selector).scrollIntoView();
});
When('I scroll to the element {locator position}{locator}', async function (locatorOptions, locator) {
  await $$(locator)[locatorOptions.position].scrollIntoView();
});
When('I search by phrase {text}', async (phrase) => {
  await $(PageFactory['Search']['Search Field']).waitForClickable();
  await $(PageFactory['Search']['Search Field']).setValue(phrase);
  await $(PageFactory['Search']['Search Field']).waitForClickable();
  await browser.keys('Enter');
});
When('I fill in {locator} field with {text}', async (selector, text) => {
  await $(selector).setValue(text);
});
When('I login to application', async () => {
  await $(PageFactory['Login Page']['Login From Email']).click();
  await $(PageFactory['Login Page']['Email Field']).setValue('nas_nas15@mail.ru');
  await $(PageFactory['Login Page']['Password Field']).setValue('28Am5S');
  await $(PageFactory['Login Page']['Login Button']).click();
});
When('I put item {locator} to the cart', async function (selector) {
  await $(selector).click();
  await $('.second-button').waitForDisplayed();
});

Then('I expect element {locator} is equal to {text}', async (selector, text) => {
  expect(await $(selector).getText()).to.equal(text);
});
Then('I expect value {locator} is equal to {text}', async (selector, text) => {

  expect(await $(selector).getValue()).to.equal(text);
});

Then('I expect element {locator} should contain {text}', async (selector, text) => {
  expect(await $(selector).getText()).to.contain(text);
});
Then('I expect element {locator position}{locator} should be equal {text}', async (locatorOptions, locator, text) => {
  expect(await $$(locator)[locatorOptions.position].getText()).to.equal(text);
});
Then('I expect element {locator} exists', async (selector) => {
  expect(await $(selector)).to.exist;
});