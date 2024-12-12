/// <reference types="Cypress" />

describe('it passes', () => {
    beforeEach(() => {
        // Test cleanup
        cy.request('POST', '/api/reset')
    
    
      });

    //Start writing your tests here:
    it('verify response gets 201 status when created a new user', () => {

        cy.request('POST', 'http://localhost:3000/api/signup', { email: 'test111@example.com', password: 'password', welcomeEmail: false }).then(
            (response) => {
              expect(response.body.user).to.have.property('email', 'test111@example.com'); 
              expect(response.status).to.eq(201);
            }
          )

    });

    it('verify by creating a new board, a list for that board and a card for that list', () => {
        let boardId;
        let listId;
        
        cy.request('POST', 'http://localhost:3000/api/boards', { name: 'My first Board' }).then(
            (boardResponse) => {
              expect(boardResponse.body).to.have.property('name', 'My first Board'); 
              expect(boardResponse.status).to.eq(201);
              boardId = boardResponse.body.id;
            }
          );

          cy.request('POST', 'http://localhost:3000/api/lists', { boardId, name: 'My first list', order: 0 }).then(
            (listResponse) => {
              expect(listResponse.body).to.have.property('name', 'My first list'); 
              expect(listResponse.status).to.eq(201);
              listId = listResponse.body.id;
            }
          )

          cy.request('POST', 'http://localhost:3000/api/cards', { boardId, listId, name: 'My first card', order: 0 }).then(
            (listResponse) => {
              expect(listResponse.body).to.have.property('name', 'My first card'); 
              expect(listResponse.status).to.eq(201);
            }
          )

    });

})