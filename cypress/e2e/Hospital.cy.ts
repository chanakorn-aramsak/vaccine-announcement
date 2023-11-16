describe('template spec', () => {
  it('should pause video and play', () => {
    cy.visit("/")

    cy.get('video').should('exist')
    cy.get('button[id="play-button"]').should('contain', 'Pause');
    cy.get('video').should('have.prop', 'paused', false);
  })
})