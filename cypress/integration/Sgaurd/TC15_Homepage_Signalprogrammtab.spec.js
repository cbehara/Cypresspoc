describe('Signalprogramm Tab Functionality', function () {
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        //sigin to the app
        cy.SignIn()
        cy.viewport(1280, 720)
        cy.wait(10000)
        //select the Training center city from dropdown
        cy.get('#city-select').click({ force: true })
        cy.xpath('//div[3]/ul/li[2]').contains('Training Center').click()
        cy.wait(2000)
        //search 00-HQ-TCC-K204 and enter
        cy.xpath('//*[@id="react-select-2-input"]').type('00-HQ-TCC-K204{enter}', { force: true })
        //verify the url path 
        cy.hash().should('include', '#details/intersection/00-HQ-TCC-K204/general')
        //check the text on page 
        cy.get('.MuiCardHeader-content > :nth-child(1)').should('contain.text', 'Braunschweiger Str. / Siemensstr.')
        //Take the screenshot
        cy.screenshot({ capture: "fullPage" });
    })

    it('Verify the Signalprogramm schalten Tab Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //click on  Signalprogramm tab
        cy.xpath("//*[text()='Signalprogramm schalten']").click({ force: true });
        //Validate the URL path
        cy.hash().should('include', '#details/intersection/00-HQ-TCC-K204/switch_signal_program');
        //Verify the header tite
        cy.title().should('eq', 'Siemens Serviceguard');
        //validate the protocol
        cy.location('protocol').should('eq', 'https:');
        //

    });

    after(() => {
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        cy.log('Log Out')
        cy.screenshot({ capture: "fullPage" });

    })

})