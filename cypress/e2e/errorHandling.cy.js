describe('Should have proper error handling with fetch functions and form functions', () => {
  it('Should show user any fetch errors', () => {
    cy.intercept("GET", 'https://klime-be.onrender.com/api/v0/users/1/walls', {
      statusCode: 500,
      fixture: "walls-fixture.json"
    })
      .visit("http://localhost:8081/")
      .get('.r-backgroundColor-rwdtie > .css-text-146c3p1').should('be.visible')
      .get('[data-testid="saved-container"]').should('not.exist')
  })
  it('Should not allow to user to submit a form until it is filled', () => {
    cy.intercept("GET", 'https://klime-be.onrender.com/api/v0/users/1/walls', {
      statusCode: 200,
      fixture: "walls-fixture.json"
    })
    cy.intercept("GET", 'https://klime-be.onrender.com/api/v0/users/1/walls/1/problems', {
      statusCode: 200,
      fixture: "problems-fixture.json"
    }).as('problems')
    cy.visit('http://localhost:8081/')
      .get('[data-testid="saved-container"]').click({ force: true, multiple: true })
      .get('[data-testid="create-button"]').click()
      .get('[data-testid="save-button"]').click()
      .get('[data-testid="form-name"]').should('have.attr', 'placeholder', 'ENTER NAME')
      .get('[data-testid="save-save-button"]').click()
      .get('[data-testid="save-save-button"]').should('be.visible')
      .get('[data-testid="save-close-button"]').should('be.visible')
      .get('[data-testid="form-name"]').should('have.attr', 'placeholder', 'PLEASE ENTER A NAME TO CONTINUE')

  })
})