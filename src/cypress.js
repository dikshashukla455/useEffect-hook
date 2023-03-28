describe('useEffect Hook Demo App', () => {
    it('increments count on button click', () => {
      cy.visit('/');
      cy.contains('Count: 0');
      cy.contains('Increment Count').click();
      cy.contains('Count: 1');
    });
  
    it('updates document title when count changes', () => {
      cy.visit('/');
      cy.contains('Count: 0');
      cy.get('title').should('contain', 'Count: 0');
      cy.contains('Increment Count').click();
      cy.contains('Count: 1');
      cy.get('title').should('contain', 'Count: 1');
      cy.contains('Increment Count').click();
      cy.contains('Count: 2');
      cy.get('title').should('contain', 'Count: 2');
    });
  });
  
  