describe.skip('Add Note', () => {
    it('Skip tutorial', async() => {
        await driver.pause(3000)
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
            .click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toHaveText("Add note");
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note and validate it', async() => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Favourite Anime");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .setValue("One\nTwo\nThree");

        //save the changes
        await driver.back();
        await driver.back();

        //validate edit button
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("One\nTwo\nThree");
    });

    it('Delete the note and validate it', async() => {
        await driver.back();
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
            .getText();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
            .click();
        await $("~More").click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]')
            .click();
        // await $('//*[@resource-id="android:id/button1"]')
        //     .click();
        await driver.acceptAlert();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
            .click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]')
            .click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
            .toHaveText("");
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
            .toHaveText(note);
    });
});