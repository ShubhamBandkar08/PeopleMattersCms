import { sessionPageObject } from "../../pages/sessionPage";
import { createTag } from "../../pages/tag";

const createTagObject = new createTag();
const sessionPageObject1 = new sessionPageObject();

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

    it("Verify tag", () => {
        sessionPageObject1.homeURL();
        createTagObject.ClickOnTagMenuOption();
        // Add logic for verifying tags
    });
});