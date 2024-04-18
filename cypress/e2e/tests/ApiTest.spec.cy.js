import {httpRequest} from "../pages/HttpRequest";

describe('Api tests', () => {
    it('should schuffle the cards', () => {
        httpRequest.APIschufle();
    });
});
describe('Api tests', () => {
    it('should use a partial deck', () => {
        httpRequest.brandANewDeck()
    });
});