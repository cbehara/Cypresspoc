describe('Detektoren Tab Functionality', function () {
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

    it('Verify the Detektoren Tab Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //click on Detektoren tab
        cy.xpath("//span[normalize-space()='Detektoren']").click({ force: true })
        //verify the URL path
        cy.hash().should('include', '#details/intersection/00-HQ-TCC-K204/detectors')
        //check the header titie 
        cy.title().should('eq', 'Siemens Serviceguard')
        //check the protocol
        cy.location('protocol').should('eq', 'https:')
        //click on search buttom
        cy.get('[aria-label="Suche"] > .MuiIconButton-label > .MuiSvgIcon-root').click({ force: true })
        //enter DIA
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('D1A{enter}', { force: true })
        //Select the list
        cy.xpath("//tbody/tr[1]/td[2]/li[1]/div[1]/span[1]/img[1]").click({ force: true })
        //Verify the text
        cy.xpath("//span[normalize-space()='Allgemein']").should('contain.text', 'Allgemein')
        //click on next tab
        cy.xpath('//*[@id="simple-tab-1"]/span[1]').click({ force: true })
        //Click on close(*)
        cy.get('.MuiIconButton-label > .material-icons > .jss39').click({ force: true })
        //take screenshot after sucess
        cy.screenshot({ capture: "fullPage" });
    })

    after(() => {
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        cy.log('Log Out')
        cy.screenshot({ capture: "fullPage" });

    })
  
})