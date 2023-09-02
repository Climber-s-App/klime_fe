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
  it('should take user to the problems page and see proper elements', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="saved-container"]').click({ force: true , multiple: true})
      .wait('@problems')
      .get('[data-testid="view-problems"]').should('be.visible')
      .get('[data-testid="view-problems"]').children().should('have.lengthOf', 3)
      .get('[data-testid="problem-name"]').should('be.visible')
      .get('[data-testid="problem-grade"]').should('be.visible')
      .get('[data-testid="info-button"]').should('be.visible')
      .get('[data-testid="create-button"]').should('be.visible')
      .get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(2) > [style="height: 64px;"] > .r-alignItems-1oszu61 > .r-marginInline-1xpp3t0 > .css-text-146c3p1')
      .invoke('text').should('contain', 'View All Problems')
  })
  it('should take user to a single saved problem when clicked', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
      .get('[data-testid="saved-container"]').click({ force: true , multiple: true})
      .wait('@problems')
      .get('[data-testid="problem"]').click({ force: true , multiple: true})
      .get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(2) > [style="height: 64px;"] > .r-alignItems-1oszu61 > .r-marginInline-1xpp3t0 > .css-text-146c3p1')
      .invoke('text').should('contain', "View Problem")
      .get('[data-testid="view-problem"]').should('be.visible')
      .get('[data-testid="view-problem-name"]').should('be.visible')
      .get('[data-testid="view-problem-grade"]').should('be.visible')
      .get('[data-testid="create-button"]').should('not.exist')
  })
})