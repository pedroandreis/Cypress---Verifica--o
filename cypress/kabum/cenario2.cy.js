// describe('Cenário 2: Adição de Produtos ao Carrinho', () => {

//     before(() => {
//         Cypress.on('uncaught:exception', () => false);
//     });

//     it('1. Acesse a página inicial da Kabum', beforeEach(() => {
//         cy.visit("https://www.kabum.com.br/");
//     }));
    
//     it('2. Escolha um produto na página inicial', () => {
//       // Substitua '.product-card' pelo seletor real do elemento que representa um produto na página inicial
//       cy.get('.sc-d79c9c3f-0').first().click({force: true});
//     });
  
//     it('3. Adicione o produto ao carrinho', () => {
//       // Substitua '.add-to-cart-button' pelo seletor real do botão de adicionar ao carrinho
//       cy.get('.sc-50d5e82e-0').first().click({force: true});
//     });

//     it('4. Confirme se o produto foi adicionado com sucesso ao carrinho.', () => {
//         cy.get('.toast-notification').should('be.visible').contains('Produto adicionado com sucesso no carrinho');
//     });

    // it('4. Navegue até o carrinho', () => {
    //   // Substitua '.cart-icon' pelo seletor real do ícone ou link do carrinho
    //   cy.get('.IconHeaderCart').click({force: true}); 
    // });

    // it('5. Verifique se o produto está presente na lista', () => {
    //   // Substitua '.cart-item' pelo seletor real do elemento que representa um item no carrinho
    //   cy.get('#selectAddress', { timeout: 10000 }).should('exist');
      
    // });
  
    // it('Atualize a quantidade do produto no carrinho e confirme se o total é ajustado corretamente', () => {
    //   // Substitua '.quantity-input' pelo seletor real do campo de quantidade no carrinho
    //   cy.get('.quantity-input').clear().type('2'); // Atualiza a quantidade para 2
  
    //   // Substitua '.update-cart-button' pelo seletor real do botão de atualizar carrinho
    //   cy.get('.update-cart-button').click();
  
    //   // Substitua '.total-amount' pelo seletor real do elemento que exibe o total no carrinho
    //   cy.get('.total-amount').should('contain', 'Total: R$'); // Confirma se o total é ajustado corretamente
    // });
//   });