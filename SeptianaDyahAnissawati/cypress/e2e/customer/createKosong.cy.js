describe('Create Customer Empty (Negatif)', () => {
  it('passes', () => {
    // visit the Itera web login
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.contains('a.nav-link','Login').click()
    cy.location('pathname').should('eq','/Login')
    // username
    cy.get('#Username').type('septiana17')
    // password
    cy.get('#Password').type('anissa1709')
    // button login
    cy.get('.btn-primary').click()

    cy.get('h1').should('be.visible')

    // create customer
    cy.contains('a.btn.btn-primary','Create New').click()
    // name
    cy.get('#Name').type(' ')
    // company
    cy.get('#Company').type(' ')
    // address
    cy.get('#Address').type(' ')
    // city
    cy.get('#City').type(' ')
    // phone
    cy.get('#Phone').type(' ')
    // email
    cy.get('#Email').type(' ')
    // button submit
    cy.get('.btn.btn-primary').click()

    cy.get('h1').should('be.visible')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})