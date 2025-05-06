export class createTag{

    webElement={
       menuTag:':nth-child(3) > .ts-menu-section-wrapper > :nth-child(4) > .ts-menu-button > .ts-menu-label', 

    }
ClickOnTagMenuOption(){
    cy.get(this.webElement.menuTag).click({force:true})
}


}
