describe("Valid Login/logout Test", () => {
    before(function(){
        cy.visit("/#map")
        cy.wait(3000)
    })
    it("Should login to application with valid data", () => {
        cy.title().should('eq', 'Log in to ITS Identity Test')
        cy.location('protocol').should('eq', 'https:')
        cy.fixture('userLogindetails').then((user)=> {
        cy.get('#username').type(user.username)
        cy.get('#password').type(user.password)
        cy.get('.btn').contains('Login').should('be.visible').click()
        //cy.screenshot({ capture: "fullPage" });
        
    })
        //cy.wait(3000)
        //cy.viewport(1280, 720)
        //cy.contains('serviceGuard', { timeout: 10000 }).should('be.visible')
        //cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[2]/button/span[1]/div/span/img').click()
        //cy.xpath('//*[@id="user-menu"]/div[3]/ul/li').click()
        //cy.screenshot({ capture: "fullPage" });


        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="#all"] > .MuiTab-wrapper > .jss21').click();
        cy.get('.MuiTableHead-root > .MuiTableRow-root > .jss145 > .MuiButtonBase-root > .MuiIconButton-label > .jss152').check();
        cy.get('[aria-label="CSV herunterladen"] > .MuiIconButton-label > .material-icons > .jss207').click();
        //cy.get(':nth-child(1) > :nth-child(5) > .MuiListItem-root > .MuiListItemText-root > .MuiListItemText-primary > .jss251').click();
        //cy.get('[aria-label="CSV herunterladen"] > .MuiIconButton-label > .material-icons > .jss207').click();
        //cy.get('.Mui-selected > :nth-child(5) > .MuiListItem-root > .MuiListItemIcon-root > .material-icons > .jss207').click();
        cy.get('#simple-tab-1 > .MuiTab-wrapper').click();
        cy.get('#simple-tab-2 > .MuiTab-wrapper').click();
        cy.get('#simple-tab-3 > .MuiTab-wrapper').click();
        cy.get('#simple-tab-4 > .MuiTab-wrapper').click();
        cy.get('#simple-tab-5 > .MuiTab-wrapper').click();
        cy.get('.MuiIconButton-label > .material-icons > .jss39').click();
        /* ==== End Cypress Studio ==== */
    })
   
})