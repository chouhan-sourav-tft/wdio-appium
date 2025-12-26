import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe('Add Note', () => {
    it('Skip tutorial', async() => {
        await driver.pause(3000)
        await AddNoteScreen.skipBtn.click();
        // await skipBtn();
        await expect(AddNoteScreen.addnotescren).toHaveText("Add note");
        await expect(AddNoteScreen.addnotescren).toBeDisplayed();
    });

    it('Add a note and validate it', async() => {
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.Text.click();
        await expect(AddNoteScreen.editIcon).toBeDisplayed();
        await AddNoteScreen.noteHeadingTextArea
            .addValue("Favourite Anime");
        await AddNoteScreen.noteTextArea
            .setValue("One\nTwo\nThree");

        //save the changes
        await AddNoteScreen.saveNote();

        //validate edit button
        await expect(AddNoteScreen.editBtn)
            .toBeDisplayed();
        await expect(AddNoteScreen.textArea)
            .toHaveText("One\nTwo\nThree");
    });

    it.skip('Delete the note and validate it', async() => {
        await driver.back();
        const note = await AddNoteScreen.getNoteTxt
            .getText();
        await AddNoteScreen.getNoteTxt
            .click();
        await AddNoteScreen.moreBtn.click();
        await AddNoteScreen.deleteBtn
            .click();
        // await $('//*[@resource-id="android:id/button1"]')
        //     .click();
        await driver.acceptAlert();
        await expect(AddNoteScreen.noteBtn)
            .toHaveText("");
        await AddNoteScreen.noteIcon
            .click();
        await AddNoteScreen.deleteBtn
            .click();
        await expect(AddNoteScreen.getNoteTxt)
            .toHaveText("");
        await expect(AddNoteScreen.getNoteTxt)
            .toHaveText(note);
    });
});