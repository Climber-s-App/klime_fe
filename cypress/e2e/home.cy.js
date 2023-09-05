beforeEach(() => {
  cy.intercept("GET", 'https://klime-be.onrender.com/api/v0/users/1/walls', {
    statusCode: 200,
    fixture: "walls-fixture.json"
  }).as('walls')
})

describe('user should see a home page with proper elements', () => {
  it('should take user to the home page and see proper elements', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="site-logo"]').should('be.visible')
      .get('.r-marginInline-1xpp3t0 > .css-text-146c3p1').invoke('text').should('contain', 'Home')
      .get('[data-testid="saved-container"]').children().should('have.length', 3)
      .get('[data-testid="menu-bar"]').should('be.visible')
      .get('[data-testid="info-button"]').should('be.visible')
  })
  it('should show user an info modal when the button is clicked and display proper contents', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="info-button"]').click()
      .get('[data-testid="info-modal"]').should('be.visible')
      .get('[data-testid="info-modal-title"]').invoke('text').should('contain', 'KLIME INFO')
      .get('[data-testid="create-problem-title"]').invoke('text').should('contain', 'On create a problem page: ')
      .get('[data-testid="info-list"]').children().should('have.length', 4)
      .get('[data-testid="close-button"]').click()
      .get('[data-testid="info-modal"]').should('not.exist')
  })
  it('should contain the proper wall elements', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="wall"]').should('be.visible')
      .get('[data-testid="wall-image"]').should('be.visible')
      .get('[data-testid="wall-text"]').should('be.visible')
  })
})