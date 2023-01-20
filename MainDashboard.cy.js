describe('Dashboard', () => {
  it('berhasil ke Home', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('#navbarColor01 > :nth-child(1) > :nth-child(1) > .nav-link').click() //menampilkan tampilan isi home

    
  })
})