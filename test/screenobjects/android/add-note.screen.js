class AddNoteScreen {
    get skipBtn () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
    get addnotescren () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }
    get addNoteText () {
        return $('//*[@text="Add note"]');
    }
    get Text () {
        return $('//*[@text="Text"]');
    }
    get editIcon () {
        return $('//*[@text="Editing"]');
    }
    get addNoteText () {
        return $('//*[@text="Add note"]');
    }
    get noteHeadingTextArea () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get noteTextArea () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get editBtn () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get textArea () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get getNoteTxt () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    get moreBtn () {
        return $("~More");
    }
    get deleteBtn () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }
    get noteBtn () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get noteIcon () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    async saveNote () {
        await driver.back();
        await driver.back();
    }




}

export default new AddNoteScreen();