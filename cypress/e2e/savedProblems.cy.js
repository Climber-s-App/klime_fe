beforeEach(() => {
  cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls', {
    statusCode: 200,
    fixture: "walls-fixture.json"
  }).as('walls')
  cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
    statusCode: 200,
    fixture: "problems-fixture.json"
  }).as('problems')
})

describe('user should see a page of saved problem when clicking on a wall', () => {
  it('should take user to the home page and see proper elements', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="saved-container"]').click({ force: true , multiple: true})
      .wait('@problems')

      
  })
})