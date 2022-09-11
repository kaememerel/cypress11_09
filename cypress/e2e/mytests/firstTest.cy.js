/// <reference types="cypress" />
Cypress.config().waitForAnimations = true;
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
})

const testedURL = "https://www.wsb.pl/warszawa/";
const phrase = "tester oprogramowania{enter}"
const courseLink = "Tester oprogramowania - Program"

describe('WSB search', ()=>{
    it('should open url address', ()=>{
        cy.visit(testedURL);
        cy.get(".agree-button").click();
    })
    it("should find course for testers", () => {
        cy.get(".search-icon >a").click({force: true});
        cy.get('#header-search > .grid-wrapper > .search-input > .search').as("searchField")
        cy.get("@searchField").click();
        cy.get('@searchField').type(phrase);
        cy.get(".agree-button").click();
    })
    it("should contain programme for testers", () => {
        cy.get('[value="96"] > .box').click()
        //rozw 1
        //cy.get(".listing-content").contains(courseLink, {matchCase: true});
        cy.get(".listing-content").should("contain", courseLink)
    })
});