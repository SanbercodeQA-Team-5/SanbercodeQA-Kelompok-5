describe('Edit Customer Success (Positif)', () => {
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

    // search
    cy.get('#searching').type('Septianas')
    cy.contains('input.btn.btn-secondary.my-2.my-sm-0','Search').click()

    cy.get('h1').should('be.visible')

    // edit customer
    cy.contains('a.btn.btn-outline-primary','Edit').click()
    // name
    cy.get('#Name').clear().type('Septianass')
    // company
    cy.get('#Company').clear().type('Institut Teknologi Nopember')
    // address
    cy.get('#Address').clear().type('Sukolilo')
    // city
    cy.get('#City').clear().type('Surabaya')
    // phone
    cy.get('#Phone').clear().type('123')
    // email
    cy.get('#Email').clear().type('septiana@gmail.com')
    // button submit
    cy.get('.btn.btn-primary').click()

    cy.get('h1').should('be.visible')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})