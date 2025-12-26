describe.skip('Android Elements Tests', () => {
    it('Find element by accessibility id', async() => {
        //find element by accessibility id
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async() => {
        //find element by classname
        const className = await $('android.widget.TextView');

        //assertion
        console.log("@@@@@@---> ", className);
        await expect(className).toHaveText("API Demos");
    });

    it('Find element by Xpath', async() => {
        //find element by Xpath-(//tagName[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class -assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find element by mobile UIAutomator', async() => {
        //find element by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple element', async() => {
    const actualList = [];

    //find multiple elements
    const textList = await $$('android.widget.TextView');

    //loop through them
    for (const element of textList) {
        actualList.push(await element.getText());
    }
        //console elements
    console.log(actualList);
    });

    it.only('Working with input element', async() => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();

        //enter the name
        const inputField = $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await inputField.addValue("Canada");
        await expect(inputField).toHaveText("Canada");
    });
})