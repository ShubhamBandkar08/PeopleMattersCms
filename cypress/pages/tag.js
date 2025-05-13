export class createTag1 {

    webElement = {
        menuTag:':nth-child(3) > .ts-menu-section-wrapper > :nth-child(3) > .ts-menu-button > .ts-menu-label',
  //      : ':nth-child(3) > .ts-menu-section-wrapper > :nth-child(4) > .ts-menu-button > .ts-menu-label',
        //  element not  found error
        clickOnTagButton: "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary max-sm:is-full mui-e7ld5s']",
        enterTagName: '#\\:r3\\:',
        clickOnAddButton: ".flex-col > .flex > .MuiButton-contained",
    }
    ClickOnTagMenuOption() {
        cy.get(this.webElement.menuTag).click({ force: true })
    }
    //crete new tag
    ClickOnCreateTagButton() {
        cy.get(this.webElement.clickOnTagButton).click({ force: true })
    }
    EnterTagName(randomName) {
        cy.get(this.webElement.enterTagName).type(randomName)
    }
    ClickOnAddButton() {
        cy.get(this.webElement.clickOnAddButton).click({ force: true })

    }
}

export class createTag extends createTag1 {

    createNewTag() {
        cy.wait(2000);
        this.ClickOnTagMenuOption();
        cy.wait(2000);
        this.ClickOnCreateTagButton();
        cy.wait(2000);
        const randomName = `user_${Math.random().toString(36).substring(2, 8)}`;
        this.EnterTagName(randomName);
        this.ClickOnAddButton();
    }


}
