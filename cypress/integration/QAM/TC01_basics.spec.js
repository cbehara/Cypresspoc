describe('Login', function(){
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.SignIn()
    })
   
    it('Verify the Homepage Functionality', function(){
        /*cy.visit('https://sguard.testing.its-siemens.com/#map')
        cy.get('#username').type('sguard-automation-user')
        cy.get('#password').type('W_TpXpDv%5avJnwAT2R#wdbTsP_2ds9@')
        cy.get('.btn').contains('Login').should('be.visible').click()
        cy.wait(5000)
        cy.title().should('eq','Siemens Serviceguard')
        */
        cy.wait(5000)
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[1]/div/div[3]/div[2]/div/div/a[1]/span/span').click()
        cy.hash().should('include','#map')
        cy.get('input[type=checkbox]').uncheck()
        cy.get('.jss68 > .MuiIconButton-label > .jss73').check().should('be.checked')
        cy.get('.jss74 > .MuiIconButton-label > .jss73').check().should('be.checked')
        cy.get('.jss78 > .MuiIconButton-label > .jss73').check().should('be.checked')
        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div/div[2]/div/button/span[1]/span/img').click()
        cy.get(':nth-child(1) > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div/div[2]/div/ul/div[2]/div[1]/span/img').click()
        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div/div[2]/div/ul/div[3]/div[1]/span/img').click()
        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div/div[1]/div/div[2]/div/div[2]/div[1]/div[1]/a[1]').click()
        cy.wait(5000)
        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div/div[1]/div/div[2]/div/div[2]/div[1]/div[1]/a[2]').click()
    })

    it('Homepage Liste', function(){
        //cy.title().should('eq', 'Gärtnerstr./Friedrich-Ebert-Anlage')

        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
        cy.viewport(1280, 720)
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[1]/div/div[3]/div[2]/div/div/a[2]/span/span').click()
        cy.hash().should('include','#all')
        cy.scrollTo(0, 5000);
        //cy.get('input[type=checkbox]').check().should('be.checked')
        //cy.wait(5000)
        cy.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div/div/div/div/div[3]/div/div[1]/div[2]/button[4]/span[1]/span/img').click()
        cy.xpath('//*[@id="root"]/div/div/div[1]/div[1]/header/div/div[1]/div/div[3]/div[2]/div/div/a[3]/span/span').click()
        cy.hash().should('include','#favorite')
        cy.title().should('eq','Siemens Serviceguard')
        cy.location('protocol').should('eq','https:')
    })

})