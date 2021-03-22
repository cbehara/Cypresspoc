describe("Invalid Login Test", () => {
    before(function(){
        cy.visit("/#map")
        cy.wait(5000)
    })
    it("Should try to login with invalid data", () => {
        
        cy.title().should('eq', 'Log in to ITS Identity Test')
        cy.get("#kc-form-login").should("be.visible")
        cy.get('#username').type('invaliduser')
        cy.get('#password').type('invalid password')
        cy.get('.btn').contains('Login').should('be.visible').click()
    })
    it("Should display error message", () => {
        cy.get(".alert-error")
            .should("be.visible")
            .and("contain", "Invalid username or password.")
    })
    
   
})