import { getGreeting } from '../support/app.po';

describe('pn106', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pn106!');
  });
});
