// describe('Cenário 3: Finalização da Compra', () => {
//     before(() => {
//         Cypress.on('uncaught:exception', () => false);
//     });

//     it('1. Acesse a página inicial da Kabum', beforeEach(() => {
//         cy.visit("https://www.kabum.com.br/");
//     }));
  
//     it('2. Vá para o carrinho e clique em "Finalizar Compra"', () => {
//       cy.get('.IconHeaderCart').click({force: true});
      
//       cy.get('.buttonGoToPayment', { timeout: 10000 }).click({ force: true });
//     });
  
//     it('2. Preencha informações de entrega e pagamento', () => {
//       // Substitua os seletores e adicione comandos para preencher informações de entrega e pagamento
//       // Exemplo: cy.get('#endereco').type('Endereço de Entrega');
//       // Exemplo: cy.get('#numero-cartao').type('Número do Cartão');
//     });
  
//     it('3. Escolha um método de pagamento e confirme se as opções estão corretas', () => {
//       // Substitua os seletores e comandos para escolher um método de pagamento
//       // Exemplo: cy.get('#metodo-pagamento').select('Cartão de Crédito');
//       // Adicione verificações conforme necessário
//     });
  
//     it('4. Finalize a compra e verifique se o recibo é exibido corretamente', () => {
//       // Substitua '.finalizar-compra-button' pelo seletor real do botão "Finalizar Compra"
//       cy.get('.finalizar-compra-button').click({ force: true });
  
//       // Substitua '.recibo' pelo seletor real do elemento que exibe o recibo
//       cy.get('.recibo').should('be.visible');
//     });
//   });
  