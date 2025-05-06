 export class sessionPage {

weblocator={
EmailId:'#\\:R27lafnlpuja\\:',
Password:'#\\:R2blafnlpuja\\:',
loginButton:'[type="submit"]',


}

openURL(){

cy.visit(Cypress.env('URL')) 

}

homeURL(){  
    cy.visit(Cypress.env('HOME_URL'))
}

EnterEmail(email) {
    cy.get(this.weblocator.EmailId).type(email)

}
EnterPassword(password) {       
    cy.get(this.weblocator.Password).type(password)
}

clickOnLoginButton() {  
    cy.get(this.weblocator.loginButton).click()
}



 }
 export class sessionPageObject extends sessionPage {

    login() {
        cy.session('loginSession', () => {
            this.openURL();
            this.EnterEmail('shubham@gmail.com');
            this.EnterPassword('Bhagat@1982');
            this.clickOnLoginButton();
            cy.wait(20000); // Wait for 20 seconds if necessary
            this.homeURL(); // Navigate to the home URL after login
        });
    }
    
    // Additional methods or properties for sessionPageObject can be added here
}

// Instantiate and call the method outside the class definition


