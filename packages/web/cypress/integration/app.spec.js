/* eslint-disable no-undef */

describe('Navigation', () => {
  it('should navigate to the first step page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "search-estate" and click it
    cy.get('a[href*="/search-estate"]').click();

    // The new url should include "/search-estate"
    cy.url().should('include', '/search-estate');

    // The new page should contain an h1 with "Première étape..."
    cy.get('h1').contains('Première étape...');
  });
});
