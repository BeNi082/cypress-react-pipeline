import {commonMethod} from "../../commmonmethods/commonMethods";

let searchBarSelector = '#fsearch-sw';
let searchButton = '.fx-icon.fx-icon--search.search-input__magnifier';
let imageSelector = '.fx-image';
let priceSelector = '.price-wrapper .price';
let addToCartSelector = '.call-to-action__action';
let acceptCookiesSelector = ''
export class Homepage {
    typingProduct() {
        commonMethod.clickOnAElement(searchBarSelector);
    }

    typeText() {
        commonMethod.typeText(searchBarSelector, Cypress.env('product_name'));
    }

    clickOnSearchButton() {
        commonMethod.clickOnAElement(searchButton)
    }

    clickOnTheProduct() {
        commonMethod.clickOnAElementByIndex(imageSelector, 0)
    }

    assertThePrice() {
        commonMethod.assertElementByTextAndByIndex(priceSelector, 1.299)
    }

    clickOnAddToCart() {
        commonMethod.clickOnAElement(addToCartSelector)
    }

}

export const homePge = new Homepage();