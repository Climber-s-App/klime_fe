beforeEach(() => {
  cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls', {
    statusCode: 200,
    fixture: "walls-fixture.json"
  }).as('walls')
})

describe('user should see a home page with proper elements', () => {
  it('should take user to the home page and see proper elements', () => {
    cy.visit('http://localhost:8081/')
    cy.wait('@walls')
    cy.get('[data-testid="site-logo"]').should('be.visible')
    cy.get('[data-testid="saved-container"]').children().should('have.length', 3)
    cy.get('[data-testid="menu-bar"]').should('be.visible')
    cy.get('[data-testid="info-button"]').should('be.visible')
  })
})