describe('Tutorial', () => {
  it('Berhasil masuk ke laman Tutorial', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/tutorial')
    cy.get('h2')
    cy.get('.container > :nth-child(2)')
  })
})