describe('Adicionar Produto ao Carrinho', () => {
    it('Adicionar Produto ao Carrinho', () => {
      //Acessar a amazon
      cy.visit('https://www.amazon.com.br/');
  
      //Preencher os dados da pesquisa
      cy.get('#twotabsearchtextbox').type('Iphone 13');
      cy.get('#twotabsearchtextbox').type('{enter}');
  
      //Clicar no primeiro resultado da pesquisa
      cy.get('.a-size-base-plus.a-color-base.a-text-normal').first().click();
  
      //Clicar no botão para adicionar ao carrinho
      cy.get('#add-to-cart-button').click();
  
      //Clicar no botão recusando seguro
      cy.get('#attachSiNoCoverage').click();
  
      //Verificar se está página do carrinho
      cy.url().should('include', '/cart/');
  
      //Verifica se foi adicionado ao carrinho com sucesso
      cy.get('.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold').should('contain', 'Adicionado ao carrinho');
    });
  });