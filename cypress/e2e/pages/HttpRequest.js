export class HttpRequest {
    APIschufle() {
        cy.request({
            method: 'GET',
            url: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=4',
        }).then((response) => {
            expect(response.body.success).to.eq(true)
            expect(response.body.deck_id).to.be.a('string');
            expect(response.body.deck_id).to.match(/^[0-9a-zA-Z]+$/)
            expect(response.body.shuffled).to.eq(true);
            expect(response.body.remaining).to.eq(208)
        });
    }

    brandANewDeck() {
        cy.request({
            method: 'POST',
            url: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH'
        }).then((response) => {
            expect(response.body.success).to.eq(true);
            expect(response.body.deck_id).to.be.a('string');
            expect(response.body.deck_id).to.match(/^[0-9a-zA-Z]+$/);
            expect(response.body.shuffled).to.eq(true);
            expect(response.body.remaining).to.eq(52)
        })

    }
}

export const httpRequest = new HttpRequest();