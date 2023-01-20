describe('template spec', () => {
  it('Loguot', () => {
    cy.visit('https://itera-qa.azurewebsites.net/Login')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('#Username').type('Nugroho').should('be.visible')
    cy.get('#Password').type('123456789')
    cy.get('.btn-primary').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  })
  Cypress.on('uncaught:exception', (err, runnable) =>{
        return false
    })
})