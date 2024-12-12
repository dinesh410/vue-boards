/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Use with Caution...
Cypress.Commands.add('resetApi', () => {
    Cypress.log({ displayName: 'Reset Database' })
    cy.request('POST', '/api/reset');
});

Cypress.Commands.add('resetBoards', () => {
    Cypress.log({ displayName: 'Reset boards, lists and cards' })
    cy.request('POST', '/api/boards');
});

Cypress.Commands.add('login', (email, password) => {
  // Creating a new user for the test to avoid dependancy on previous test. Better approach can be followed with more time.
  cy.request('POST', 'http://localhost:3000/api/signup', { email: email, password: password, welcomeEmail: false }).then(
    (response) => {
      expect(response.body.user).to.have.property('email', email); 
      expect(response.status).to.eq(201);
    }
  );

  // Creating a new user for the test to avoid dependancy on previous test. Better approach can be followed with more time.
  cy.request('POST', 'http://localhost:3000/api/login', { email: email, password: password }).then(
    (response) => {
      expect(response.body.user).to.have.property('email', email); 
      expect(response.status).to.eq(200);
    }
  );
});
