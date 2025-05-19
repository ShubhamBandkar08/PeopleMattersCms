class article {
articleWebElement = {
    
    clickOnArticleMOption:':nth-child(2) > .ts-menu-section-wrapper > :nth-child(2) > .ts-menu-button > .ts-menu-label',
    clickOnAddAButton:"[class$='mui-1rxx7yd']",
    clickonPostTypeOption:"div[role='presentation'] li:nth-child(3)",
    eTitle:'#\\:r4\\:',
    eDescription:"#\\:r5\\:",
     //   clickonMediaGalleryButton:""
    mGAlleryButton:'.relative > .flex > .MuiButtonBase-root',
    seleMedia:':nth-child(1) > .MuiCardMedia-root',
    cliConfirm:'.justify-end > .MuiButton-contained',
    paraGraph1:'.text-editor-content',
    clickHamburg:'.gap-3 > :nth-child(5)',
    seleCategory:':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .tabler-chevron-down',
    category:"input[aria-activedescendant=':rq:option-2']",
    clickPublishButton:'.justify-between > .gap-3 > .MuiButton-contained',
    publishNowButton:'.w-auto > .space-y-4 > :nth-child(1)'
};
    randomTitle = "Test Article"+ Math.floor(Math.random() * 1000);
    randomDescription = "This is a test article description.";
    paragraaphText = "This is a test paragraph text.";


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
        
        ClickOnMediaGalleryButton() {
            cy.get(this.articleWebElement.mGAlleryButton).click({ force: true });
        }

        selectMedia() {
            cy.get(this.articleWebElement.seleMedia).click({ force: true });
        }

        clickOnConfirmButton() {
            cy.get(this.articleWebElement.cliConfirm).click({ force: true });
        }
        enterParagraphText() {
            cy.get(this.articleWebElement.paraGraph1).type(this.paragraaphText, { force: true });
        }

        ClickOnHamburgMenuButton() {
            cy.get(this.articleWebElement.clickHamburg).click({ force: true });
        }   
        selectCategory(){

            cy.get(this.articleWebElement.seleCategory).click({ force: true });
            cy.contains('li', 'Skilling').click({ force: true });
        }

       publishArticle() {
            cy.get(this.articleWebElement.clickPublishButton).click({ force: true });
            cy.get(this.articleWebElement.publishNowButton).click({ force: true });
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
        this.ClickOnMediaGalleryButton();
        cy.wait(2000);
        this.selectMedia();
        cy.wait(2000);
        this.clickOnConfirmButton();
        cy.wait(2000);
        this.ClickOnHamburgMenuButton();
        cy.wait(5000);
       this.selectCategory();
       cy.wait(2000);
       this.publishArticle();
        cy.wait(2000);
        this.ClickArticleMenuButtion();

    }






 }