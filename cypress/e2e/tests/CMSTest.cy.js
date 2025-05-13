import { sessionPageObject } from "../../pages/sessionPage";
import { createTag } from "../../pages/tag";
import { createNewArticle } from "../../pages/article";
import { createNCollection } from "../../pages/collection";

const createTagObject = new createTag();
const sessionPageObject1 = new sessionPageObject();
const createNewArticle1 = new createNewArticle();
const createCollection1 = new createNCollection();

describe("Login Page", () => {
    beforeEach(() => {
        // Create and save the session
        cy.viewport(1920, 1080);
        cy.session('loginSession', () => {
            sessionPageObject1.login();
        });
    });

    it("Verify Login", () => {
        sessionPageObject1.homeURL();
    });

    it("Verify create New tag", () => {
        sessionPageObject1.homeURL();
        cy.wait(2000);
        createTagObject.createNewTag();
        cy.wait(2000);
    });

    it("Verify create New Article", () => {
        sessionPageObject1.homeURL();
        cy.wait(2000);
        createNewArticle1.createNewArticle();
        cy.wait(2000);
    })

    it('verify create New Collection', () => {
        sessionPageObject1.homeURL();
        cy.wait(2000);
        createCollection1.createNewcollection();
        cy.wait(2000);
    })

    it("Verify Collection Search functionality", () => {
        sessionPageObject1.homeURL();
         createCollection1.ClickOncollectionMenuButton();
        cy.wait(2000);  
        createCollection1.enterCollectionName(createCollection1.name);
       
    })


})
