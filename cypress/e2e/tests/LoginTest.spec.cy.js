import {loginPage} from "../pages/LoginPage";
import {homePge} from "../pages/Homepage";
import {commonMethod} from "../../commmonmethods/commonMethods";

describe('tests ', () => {
    it('should the user be logged in with valid credentials   ', () => {

        loginPage.visitURL();
        cy.intercept('POST', '/ro/cla.html').as('htmlApi')
        loginPage.clickOnAcceptCookies();
        cy.wait('@htmlApi');
        loginPage.clickOnLoginIcon();
        loginPage.typeEmail();
        loginPage.typePassword();
        loginPage.clickOnLoginButton();
        loginPage.clickOnDecline();
        cy.intercept('GET', '**/sundice.thomann.de/g/*').as('Api')
        homePge.typeText();
        cy.wait('@Api');
        homePge.clickOnSearchButton();
        homePge.clickOnTheProduct();
        homePge.assertThePrice();
        homePge.clickOnAddToCart();

    });
});