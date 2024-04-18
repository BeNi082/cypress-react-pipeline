import {commonMethod} from "../../commmonmethods/commonMethods";
import * as url from "url";

let clickOnAccept = '[type="button"].fx-button.fx-button--icon-left.consent-button'
let loginIconSelector = '[aria-owns="fx-flyin-customer"]'
let emailFieldSelector = '[type="text"].fx-input-text__field'
let passwordSelector = '[type="password"]'
let loginButtonSelector = '[appearance="primary"][type="submit"]'
let declineButtonSelector = '.fx-icon.fx-icon-remove.fx-size--md-md-lg.button-icon'

export class LoginPage {
    visitURL() {
        commonMethod.visitURL(Cypress.env('url'))

    }

    clickOnAcceptCookies() {
        //cy.intercept('POST', '**/ro/cookie_storage.html').as('htmlApi')
        commonMethod.clickOnAElement(clickOnAccept);
        //cy.wait('@htmlApi');
    }

    clickOnLoginIcon() {
        commonMethod.clickOnAElement(loginIconSelector);

    }


    typeEmail() {
        commonMethod.typeText(emailFieldSelector, Cypress.env('email'));
    }

    typePassword() {
        commonMethod.typeText(passwordSelector, Cypress.env('password'));
    }

    clickOnLoginButton() {
        commonMethod.clickOnAElementWithForceTrue(loginButtonSelector);
    }

    clickOnDecline() {
        commonMethod.clickOnAElementByIndex(declineButtonSelector,1);
    }
}

export const loginPage = new LoginPage();