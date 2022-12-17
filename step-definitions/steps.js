const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const {
    expect
} = require('chai')


Given(/^I navigate to the "(.*)" page$/, async (page) => {
    await browser.url(page),
        await browser.deleteCookies(),
        await browser.setWindowSize(1920, 1580)

});

When('stop brauser', async function () {
    await browser.pause(5000);
});
When('I clean all cookies', async function () {
    await browser.deleteCookies();
});

When('I click on {locator} button', async function (selector) {
    // await $(selector).waitForDisplayed();
    await $(selector).click();
});

When('I delete item from the cart', async function () {
    await $('.goods-table-cell__sub-cell_button .i-button_small.remove').click();
    await $('.goods-table-popup__cell .remove-yes').click();
});
When('I move item to favorites', async function () {
    await $('.goods-table-cell__sub-cell_button .i-button_small.addto-favs').waitForClickable();
    await $('.goods-table-cell__sub-cell_button .i-button_small.addto-favs').click();
    await $('.goods-table-popup__cell .addto-favs-yes').waitForClickable();
    await $('.goods-table-popup__cell .addto-favs-yes').click();
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
    await $('.ui-autocomplete-input').waitForClickable();
    await $('.ui-autocomplete-input').setValue(phrase);
    await $('.ui-autocomplete-input').waitForClickable();
    await browser.keys('Enter');
});
When('I fill in {locator} field with {text}', async (selector, text) => {
    await $(selector).setValue(text)

});
When('I login to application', async () => {
    await $('#loginFormLoginEmailLink').click();
    await $('#loginForm .i-popup__input').setValue('nas_nas15@mail.ru');
    await $('#loginForm .i-input_with-padding.i-popup__input').setValue('28Am5S');
    await $('#loginForm .i-popup__form-button').click();
});
When('I put item {locator} to the cart', async function (selector) {
    await $(selector).click();
    await $('.second-button').waitForDisplayed();
});

Then('I expect element {locator} is equal to {text}', async (selector, text) => {
    expect(await $(selector).getText()).to.equal(text);
})
Then('I expect value {locator} is equal to {text}', async (selector, text) => {
    expect(await $(selector).getValue()).to.equal(text);
})

Then('I expect element {locator} should contain {text}', async (selector, text) => {
    expect(await $(selector).getText()).to.contain(text);

})
Then('I expect url contains {text}', async (text) => {
    expect(await browser.getUrl()).to.contain(text);
})
Then('I expect element {locator position}{locator} should be equal {text}', async (locatorOptions, locator, text) => {
    expect(await $$(locator)[locatorOptions.position].getText()).to.equal(text);
})
Then('I expect element {locator} exists', async (selector) => {
    expect(await $(selector)).exists;
})