describe('Detailzustand Tab Functionality', function () {
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        //sigin to the app
        cy.SignIn()
        cy.viewport(1280, 720)
        cy.wait(15000)
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

    it('Verify the Detailzustand Tab Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        //click on Detailzustand tab
        cy.xpath("//span[contains(text(),'Detailzustand')]").should('contain.text', 'Detailzustand').click({ force: true })
        //Click on calender 
        cy.xpath("//button[@aria-label='change date']").click({ force: true })
        //Select date
        cy.xpath("//div[@class='MuiPickersSlideTransition-transitionContainer MuiPickersCalendar-transitionContainer']//div[2]//div[3]//button[1]").click({ force: true })
        cy.wait(3000)
        //click on checkbox
        cy.get('input[type=checkbox]').check({force: true}).should('be.checked')
        cy.wait(3000)
        //click on download csv file button
        //cy.xpath("//button[@title='CSV herunterladen']").click({ force: true })
        //cy.wait(3000)
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[2]/span[1]/*[1]").click()
        cy.wait(3000)
    })

    after(() => {
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        cy.log('Log Out')
        cy.screenshot({ capture: "fullPage" });

    })

})