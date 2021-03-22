import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#map')
    cy.title().should('eq', 'Log in to ITS Identity Test')
    cy.location('protocol').should('eq', 'https:')
    //cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        //cy.get('input[type = "email"]').type('chakravarthibehara@gmail.com')
        //cy.get('input[type = "password"]').type('Chakri@qa')
        //cy.root().submit()   // submits the form yielded from 'within'
        cy.fixture('userLogindetails').then((user)=> {
        cy.get('#username').type(user.username)
        cy.get('#password').type(user.password)
        cy.get('.btn').contains('Login').should('be.visible').click()
        //cy.root().submit()
    })
    cy.contains('Siemens Serviceguard', { timeout: 10000 }).should('be.visible')
})