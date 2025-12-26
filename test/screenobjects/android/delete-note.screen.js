import AddNoteScreen from "./add-note.screen";

class DeleteNoteScreen {

    async skipTutorial () {
        await driver.pause(3000);
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addnotescren).toHaveText("Add note");
        await expect(AddNoteScreen.addnotescren).toBeDisplayed();
    }

    async addAndValidateNote (noteHeading, noteBody) {
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.Text.click();
        await expect(AddNoteScreen.editIcon).toBeDisplayed();
        await AddNoteScreen.noteHeadingTextArea
            .addValue(noteHeading);
        await AddNoteScreen.noteTextArea
            .setValue(noteBody);
        //save the changes
        await AddNoteScreen.saveNote();
        //validate edit button
        await expect(AddNoteScreen.editBtn)
            .toBeDisplayed();
        await expect(AddNoteScreen.textArea)
            .toHaveText(noteBody);
    }

}

export default new DeleteNoteScreen();