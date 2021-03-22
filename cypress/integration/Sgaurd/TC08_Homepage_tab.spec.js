describe('Tab Functionality', function () {
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        //sigin to the app
        cy.SignIn()
        cy.viewport(1280, 720)
        cy.wait(10000)
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

    })

    it('Verify the  Tab Functionality', function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        //verify the Allgemein text 
        cy.xpath("//span[normalize-space()='Allgemein']").should('contain.text', 'Allgemein')
        //wait 3sec
        cy.wait(3000)
        //click on details page 
        cy.xpath("//span[text()='LSA Zustand']").click({ force: true })
        //wait 3sec
        cy.wait(3000)
        //click on Detektoren tab
        cy.xpath("//span[normalize-space()='Detektoren']").should('contain.text', 'Detektoren').click({ force: true })
        //wait 3sec
        cy.wait(3000)
        //click on Detailzustand tab
        cy.xpath("//span[contains(text(),'Detailzustand')]").should('contain.text', 'Detailzustand').click({ force: true })
        //wait 3sec
        cy.wait(3000)
        //click on Ereignisprotokoll tab
        cy.xpath("//span[normalize-space()='Ereignisprotokoll']").should('contain.text', 'Ereignisprotokoll').click({ force: true })
        //wait 3sec
        cy.wait(3000)
        //click on SP-Wechsel tab
        cy.xpath("//span[contains(text(),'SP-Wechsel')]").contains('SP-Wechsel').click({ force: true })
        //wait 3sec
        cy.wait(3000)
        //click on Notizen tab
        cy.xpath("//span[contains(text(),'Notizen')]").contains('Notizen').click({ force: true });
        //wait 3sec
        cy.wait(3000)
        //click on Signalprogramm schalten tab
        cy.xpath("//span[contains(text(),'Signalprogramm schalten')]").contains('Signalprogramm schalten').click({ force: true });
        //wait 3sec
        cy.wait(3000)

    })


    after(() => {
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        //wait 3sec
        cy.wait(3000)
        cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        cy.log('Log Out')
        cy.screenshot({ capture: "fullPage" });

    })


})