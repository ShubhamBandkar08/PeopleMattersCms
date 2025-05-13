export class collectionPage {

title = `Test Collection ${Math.floor(Math.random() * 900) + 100}`;
name ='Videos'
    collectionWebElemtents = {
        
        clickOnCollMenu: "a[value='9'] span[class='ts-menu-label mui-1bw4j2m']",
        clickOnAddNewCollButton: "[class='MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium mui-ghkmmz']",
        ETitle:'#\\:ri\\:',//cy.get()
        ClickOnSubButton: "[type='submit']",
        ClickAllTab:'#mui-p-99778-T-2',
        searchBox:"[placeholder='Search collections...']",
    }

    ClickOncollectionMenuButton() {
        cy.get(this.collectionWebElemtents.clickOnCollMenu).click({ force: true })
    }
    clickOnAddNewCollectionButton() {
        cy.get(this.collectionWebElemtents.clickOnAddNewCollButton).click({ force: true })
    }

    enterTitle(title) {
        cy.get(this.collectionWebElemtents.ETitle).type(title, { force: true })

    }

    clickOnSubmitButton() {
        cy.get(this.collectionWebElemtents.ClickOnSubButton).click({ force: true })
    }

    ClickOnAllTab() {
        cy.get(this.collectionWebElemtents.ClickAllTab).should('be.visible').click({ force: true })
    }

    enterCollectionName(name) {
        cy.get(this.collectionWebElemtents.searchBox).type(name, { force: true })
        .type('{enter}', { force: true })
    }
}

export class createNCollection extends collectionPage {

    createNewcollection() {
        this.ClickOncollectionMenuButton();
        cy.wait(2000);
        this.clickOnAddNewCollectionButton();
        cy.wait(2000);
        this.enterTitle(this.title);
        cy.wait(2000);
        this.clickOnSubmitButton();
        cy.wait(2000)
        this.ClickOncollectionMenuButton();
        cy.wait(3000)
      //  this.ClickOnAllTab();
      //  this.enterCollectionName(this.name)

    }


}





