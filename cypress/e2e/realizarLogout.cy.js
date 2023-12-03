describe('Realizar Logout', () => {
    before(() => {
      // Antes de cada teste, execute o login para garantir que o usuário esteja autenticado
      cy.visit('https://www.amazon.com.br/');
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').type('utneve@gmail.com');
      cy.get('#continue').click();
      cy.get('#ap_password').type('utneve123');
      cy.get('#signInSubmit').click();
      // Aguarda para garantir que o login seja concluído antes de continuar
      cy.wait(2000);
    });
  
    it('Realizar Logout', () => {
      // Clique no ícone ou link que leva ao menu de conta
      cy.get('#nav-link-accountList-nav-line-1').click();
  
      // Clique no botão ou link que leva à opção de logout
      cy.get('#nav-item-signout').click({ force: true });
  
      // Verifica se o logout foi bem-sucedido
      cy.url({ timeout: 10000 }).should('not.include', 'logout');
    });
  });

  