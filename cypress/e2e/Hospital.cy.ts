describe('Vaccine book app', () => {
  it('should pause the video before play', () => {
 // Visit the homepage
 cy.visit("/");

 // Check if the video exists and is visible
 cy.get('video').should('exist').and('be.visible');

 // Assert that the video is playing (paused property is false)
 cy.get('video').should('have.prop', 'paused', false);

 // Wait for 5 seconds
 cy.wait(5000);

 // Click the button to pause the video
 cy.get('button[id="play-button"]').click();

 // Assert that the video is paused (paused property is true)
 cy.get('video').should('have.prop', 'paused', true);
    

  // click on the navigate /hospital button
  cy.get('button[id="navigate-hospital-button"]').click();

  // check if the hospital page contain 3 images
  cy.get('img').should('have.length.at.least', 3);
  })
  
})