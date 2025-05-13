export class createTag1 {

    webElement = {
        menuTag:':nth-child(3) > .ts-menu-section-wrapper > :nth-child(3) > .ts-menu-button > .ts-menu-label',
  //      : ':nth-child(3) > .ts-menu-section-wrapper > :nth-child(4) > .ts-menu-button > .ts-menu-label',
        //  element not  found error
        clickOnTagButton: "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary max-sm:is-full mui-e7ld5s']",
        enterTagName: '#\\:r3\\:',
        clickOnAddButton: ".flex-col > .flex > .MuiButton-contained",
        toggle:':nth-child(1) > :nth-child(5) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input',
        popyes:'.MuiDialogActions-root > .MuiButton-contained',
        deleTag:':nth-child(1) > :nth-child(6) > .flex > .text-error > .tabler-trash'




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
    clickOnToggle() {
        cy.get(this.webElement.toggle).click({ force: true })
        cy.wait(2000);
        cy.get(this.webElement.popyes).click({ force: true })
    }
    deleteTagfunctionality(randomName) {
       cy.contains('tr',randomName).click({ force: true })
        cy.wait(2000);
        cy.get(this.webElement.popyes).click({ force: true })
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
       // this.deleteTag(randomName);
    }
    toggleFunctionality() {
        cy.wait(2000);
        this.clickOnToggle();
        cy.wait(2000);
    }
    deleteTag() {
        cy.wait(2000);
        this.deleteTagfunctionality(this.randomName);
        cy.wait(2000);
    }
}
