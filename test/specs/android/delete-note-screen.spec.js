import { $, $$, expect, driver, browser } from '@wdio/globals';

import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import DeleteNoteScreen from "../../screenobjects/android/delete-note.screen";

describe('Add Note', () => {
    it.skip('Skip tutorial', async() => {
        await DeleteNoteScreen.skipTutorial();
    });

    it.skip('Add a note and validate it', async() => {
        await DeleteNoteScreen.addAndValidateNote("Favourite Anime", "One\nTwo\nThree");
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