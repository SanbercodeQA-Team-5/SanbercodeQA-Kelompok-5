describe('Home', () => {
  it('berhasil ke laman Test Automation ', () => {
    cy.visit('https://itera-qa.azurewebsites.net/#')
    cy.get(':nth-child(4) > .btn').click().should('be.visible') //tidak menampilkan halaman read more
  })

  it('berhasil ke laman Selenium Webdriver', () => {
    cy.visit('https://itera-qa.azurewebsites.net/#')
    cy.get(':nth-child(1) > :nth-child(3) > .btn').click().should('be.visible') //tidak menampilkan halaman read more
  })

  it('berhasil ke laman To Automate or Not to Automate?', () => {
    cy.visit('https://itera-qa.azurewebsites.net/#')
    cy.get(':nth-child(1) > :nth-child(3) > .btn').click().should('be.visible') //tidak menampilkan halaman read more
  })
  
  it('berhasil ke laman Security testing', () => {
    cy.visit('https://itera-qa.azurewebsites.net/#')
    cy.get(':nth-child(1) > :nth-child(3) > .btn').click().should('be.visible') //tidak menampilkan halaman read more
  })

})