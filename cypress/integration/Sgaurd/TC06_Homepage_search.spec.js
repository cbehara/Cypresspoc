describe('Search Functionality', function () {
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        cy.SignIn()
        cy.log("=======after loginto the page========")
        cy.viewport(1280, 720)
        cy.wait(10000)
        cy.get('#city-select').click({ force: true })
        cy.xpath('//div[3]/ul/li[2]').contains('Training Center').click()
        cy.log("=====select the Training Center city from dropdown=======")
    })

    it('Verify the Search Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //select the Training center city from dropdown
        cy.get('#city-select').click({ force: true })
        cy.xpath('//div[3]/ul/li[2]').contains('Training Center').click()
        cy.wait(5000)
        //search 00-HQ-TCC-K204 and enter
        cy.xpath('//*[@id="react-select-2-input"]').type('00-HQ-TCC-K204{enter}', { force: true })
        //verify the url path 
        cy.hash().should('include', '#details/intersection/00-HQ-TCC-K204/general')
        //check the text on page 
        cy.get('.MuiCardHeader-content > :nth-child(1)').should('contain.text', 'Braunschweiger Str. / Siemensstr.')
        //Take screenshot of full page after success 
        cy.screenshot({ capture: "fullPage" });
    })

})