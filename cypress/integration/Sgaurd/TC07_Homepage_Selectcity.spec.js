describe('Select city Functionality', function () {
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        cy.SignIn()
    })

    it('Verify the Select city Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //maximize the page 
        cy.viewport(1280, 720)
        cy.wait(10000)
        //select Training Center city from dropdown
        cy.get('#city-select').click({ force: true })
        cy.xpath('//div[3]/ul/li[2]').contains('Training Center').click()
        //Take screenshot of full page after success 
        cy.screenshot({ capture: "fullPage" });



        
    })
})