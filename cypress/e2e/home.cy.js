beforeEach(() => {
  cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls', {
    statusCode: 200,
    fixture: "walls-fixture.json"
  }).as('walls')
})

describe('user should see a home page with proper elements', () => {
  it('should take user to the home page and see proper header elements', () => {
    cy.visit('http://localhost:8081/')
    cy.wait('@walls')
    cy.get('[data-testid="site-logo"]').should('be.visible')
  })
})