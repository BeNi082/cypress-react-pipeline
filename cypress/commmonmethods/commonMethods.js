export class CommonMethods {
    visitURL(URL) {
        cy.visit(URL)
    }

    clickOnAElement(WebElement) {
        // cy.intercept('POST', '**/ro/cookie_storage.html').as('htmlApi')
        cy.get(WebElement).should('be.visible').click();
        //cy.wait('@htmlApi');
    }

    clickOnAElementWithForceTrue(WebElement) {
        cy.get(WebElement).click({force: true});
    }

    typeText(WebSelector, Text) {
        cy.get(WebSelector).should('be.visible').type(Text)
    }

    clickOnAElementByIndex(WebElement, Index) {
        cy.get(WebElement).eq(Index).should('be.visible').click();
    }

    assertElementByTextAndByIndex(WebElement,Text) {
        cy.get(WebElement).contains(Text).should('be.visible');
    }
}

export const commonMethod = new CommonMethods();