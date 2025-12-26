describe.skip('Android Native Feature Tests', () => {
    it('Access an Activity directly', async() => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.media.VideoViewDemo");

        //waiting for 5 seconds
        await driver.pause(5000);

        //validating the text
        await expect($('//android.widget.TextView[@text="Media/VideoView"]')).toExist();
    });

    it('Working with Alert Dialogs', async() => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await $('~OK Cancel dialog with a message').click();

        //validating the dialog box display
        await expect($('//*[@resource-id="android:id/alertTitle"]')).toExist();

        //get alert text
        console.log("ALERT TEXT ============> ", await driver.getAlertText());
//        await $('//*[@resources-id="android:id/alertTitle"]').getText();

//        //accept alert
//        await driver.acceptAlert();

        //dismiss alert
        await driver.dismissAlert();

        //validating the dialog box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async() => {
        //access activity page
        await $('~App').click();
        await $('~Activity').click();

//        //scroll to the end (not stable if element gets moved)
//        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();


//        await $('~Secure Surfaces').click();
    });

    it.only('Horizontal scrolling', async() => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        //forward scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //backward scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        //waiting for 3 seconds
        await driver.pause(5000);

        //validating the text
//        await expect($('//android.widget.TextView[@text="Media/VideoView"]')).toExist();
    });
});