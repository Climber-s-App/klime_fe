beforeEach(() => {
  cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls', {
    statusCode: 200,
    fixture: "walls-fixture.json"
  }).as('walls')
  // cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
  //   statusCode: 200,
  //   fixture: "post-problems-fixture.json"
  // }).as('post-problems')
  cy.intercept("POST", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
    statusCode: 201,
    body: {
      "id": "4",
      "type": "problem",
      "attributes": {
        "name": "Dyno Nation",
        "vectors": [
          {
            "color": "#FFD700",
            "id": "a0475859-0f7e-4f63-9dc7-5d12160e64b3",
            "initialX": 114.00001525878906,
            "initialY": 211.6666717529297,
            "x": 114.00001525878906,
            "y": 211.6666717529297
          },
          {
            "color": "#FFD700",
            "id": "a0475859-0f7e-4f63-9dc7-6d12160e64b3",
            "initialX": 134.00001525878906,
            "initialY": 231.6666717529297,
            "x": 134.00001525878906,
            "y": 231.6666717529297
          },
          {
            "color": "#FFD700",
            "id": "a0475859-0f7e-4f63-9dc7-7d12160e64b3",
            "initialX": 154.00001525878906,
            "initialY": 251.6666717529297,
            "x": 154.00001525878906,
            "y": 251.6666717529297
          },
          {
            "color": "#FFD700",
            "id": "a0475859-0f7e-4f63-9dc7-8d12160e64b3",
            "initialX": 174.00001525878906,
            "initialY": 271.6666717529297,
            "x": 174.00001525878906,
            "y": 271.6666717529297
          }
        ],
        "wall_id": 1,
        "grade": "V9"
      }
    }
  }).as('post')
})

describe('user should be taken to a page to create a problem', () => {
  it('should take user to the create problem page and see proper elements', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
    cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
      statusCode: 200,
      fixture: "problems-fixture.json"
    }).as('problems')
      .get('[data-testid="saved-container"]').click({ force: true, multiple: true })
      .get('[data-testid="create-button"]').click()
      .get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(2) > [style="height: 64px;"] > .r-alignItems-1oszu61 > .r-marginInline-1xpp3t0 > .css-text-146c3p1')
      .invoke('text').should('contain', "Create Problem")
      .get('[data-testid="create-problem"]').should('be.visible')
      .get('[data-testid="color-button"]').should('be.visible')
      .get('[data-testid="save-button"]').should('be.visible')
  })
  it('should allow a user to place a circle', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
    cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
      statusCode: 200,
      fixture: "problems-fixture.json"
    }).as('problems')
      .get('[data-testid="saved-container"]').click({ force: true, multiple: true })
      .get('[data-testid="create-button"]').click()
      .get('[data-testid="create-problem"]').click()
      .get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(2) > [style="height: 64px;"] > .r-alignItems-1oszu61 > .r-marginInline-1xpp3t0 > .css-text-146c3p1')
      .should('be.visible')
  })
  // it.only('should allow a user to delete a circle and see an alert', () => {
  //   cy.visit('http://localhost:8081/')
  //     .wait('@walls')
  //   cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
  //     statusCode: 200,
  //     fixture: "problems-fixture.json"
  //   }).as('problems')
  //     .get('[data-testid="saved-container"]').click({ force: true, multiple: true })
  //     .get('[data-testid="create-button"]').click()
  //     .get('[data-testid="create-problem"]').click()
  //     .get('[data-testid="circle-icon"]').should('be.visible')
  //     .get('[data-testid="circle-icon"]').trigger('mouseleave')
  //     .trigger('mousemove')
  //     .get('[data-testid="alert-box"]').should('be.visible')
  // })
  it('should allow a user to save a problem', () => {
    cy.visit('http://localhost:8081/')
      .wait('@walls')
    cy.intercept("GET", 'https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls/1/problems', {
      statusCode: 200,
      fixture: "problems-fixture.json"
    }).as('problems')
      .get('[data-testid="saved-container"]').click({ force: true, multiple: true })
      .get('[data-testid="create-button"]').click()
      .get('[data-testid="create-problem"]').click()
      .get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(2) > [style="height: 64px;"] > .r-alignItems-1oszu61 > .r-marginInline-1xpp3t0 > .css-text-146c3p1')
      .should('be.visible')
      // .get('[data-testid="save-button"]').click()
      //rest of post tests
  })
})