class article {
articleWebElement = {
    
    clickOnArticleMOption:':nth-child(3) > .ts-menu-section-wrapper > :nth-child(2) > .ts-menu-button > .ts-menu-label',
    clickOnAddAButton:"[class$='mui-1rxx7yd']",
    clickonPostTypeOption:"div[role='presentation'] li:nth-child(3)",
    eTitle:'#\\:r4\\:',
    eDescription:"#\\:r5\\:"
     //   clickonMediaGalleryButton:""
    };
    randomTitle = "Test Article";
    randomDescription = "This is a test article description.";
    
        ClickArticleMenuButtion(){
            cy.get(this.articleWebElement.clickOnArticleMOption).click({ force: true })
        }
    
        clickOnAddArticleButton() {
            cy.get(this.articleWebElement.clickOnAddAButton).click({ force: true });
        }

        selectPostTypeOption() {
            cy.get(this.articleWebElement.clickonPostTypeOption).click({ force: true });
        }

        enterTitle(randomTitle) {
            cy.get(this.articleWebElement.eTitle).type(randomTitle, { force: true });
        }
        enterDescription(randomDescription) {
            cy.get(this.articleWebElement.eDescription).type(randomDescription, { force: true });
        }   

}
export class createNewArticle extends article {


    createNewArticle() {
        this.ClickArticleMenuButtion();
        this.clickOnAddArticleButton();
        cy.wait(2000);
        this.selectPostTypeOption();
        cy.wait(2000);
        this.enterTitle(this.randomTitle);  
        cy.wait(2000);
        this.enterDescription(this.randomDescription);
        cy.wait(2000);
    }






 }