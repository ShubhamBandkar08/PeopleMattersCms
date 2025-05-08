import { sessionPageObject } from "../../pages/sessionPage";
import { createTag } from "../../pages/tag";
import { createNewArticle } from "../../pages/article";
const createTagObject = new createTag();
const sessionPageObject1 = new sessionPageObject();
const createNewArticle1 = new createNewArticle();

describe("Login Page", () => {
    beforeEach(() => {
        // Create and save the session
        cy.viewport(1920, 1080);
        cy.session('loginSession', () => {
            sessionPageObject1.login();
           
        }); // <-- Properly close the cy.session() block
    });

    it("Verify Login", () => {
        // Use the session to verify login
        sessionPageObject1.homeURL();
        // cy.contains("Welcome").should("be.visible");
    });

    it("Verify create New tag", () => {
        sessionPageObject1.homeURL();
        cy.wait(2000);
        createTagObject.createNewTag();   
        cy.wait(2000);
        // Add logic for verifying tags
    });

    it.only("Verify create New Article",() => { 
        sessionPageObject1.homeURL();
        cy.wait(2000);
        createNewArticle1.createNewArticle();
       

    })
});