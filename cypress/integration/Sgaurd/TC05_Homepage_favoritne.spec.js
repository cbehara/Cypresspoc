describe('Favorite Page', function(){
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.SignIn()
    })
        it('Verify the Favorite Page', function(){    
            Cypress.on("uncaught:exception", (err, runnable) => { 
                return false;
            });
            cy.viewport(1280, 720)
            cy.wait(5000)
            cy.xpath('//*[@id="root"]/div/div/div[1]/div[1]/header/div/div[1]/div/div[3]/div[2]/div/div/a[3]/span/span').click()
            cy.hash().should('include','#favorite')
            cy.title().should('eq','Siemens Serviceguard')
            cy.location('protocol').should('eq','https:')
            cy.get('input[type=checkbox]').check({force: true}).should('be.checked')
            //cy.get('.MuiTableRow-root > :nth-child(7)').contains("00-HQ-TCC-Intersection F_3Ph")
            cy.wait(2000)
            cy.get('[aria-label="CSV herunterladen"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
            //cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div[2]/div/div/div/div/div/div[3]/div[1]/div[2]/button[2]/span[1]/svg/path').click()
    })
})