describe('Ereignisprotokoll Tab Functionality', function () {
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

    })

    it('Verify the Ereignisprotokoll Tab Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //click on Ereignisprotokoll tab
        cy.xpath("//span[normalize-space()='Ereignisprotokoll']").should('contain.text', 'Ereignisprotokoll').click({ force: true })
        //verify the URL path
        cy.hash().should('include', '#details/intersection/00-HQ-TCC-K204/events')
        //check the header titie 
        cy.title().should('eq', 'Siemens Serviceguard')
        //check the protocol
        cy.location('protocol').should('eq', 'https:')
        //Click on calander
        cy.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div[2]/div/div/div/div/div/div/div/div[1]/div/div[1]/div/div/div/button').click({ force: true })
        cy.wait(3000)
        //Select the date
        cy.xpath('//body/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]/span[1]').click({ force: true })
        cy.wait(3000)
        //Select the checkbox     
        cy.get('input[type=checkbox]').check({ force: true }).should('be.checked')
        cy.wait(3000)
        //Download the CSV file 
        cy.get('[aria-label="CSV herunterladen"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click({ force: true })
        cy.wait(3000)
    });

    after(() => {
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        cy.log('Log Out')
        cy.screenshot({ capture: "fullPage" });

    })

})