
// describe('Cenário 1: Navegação e Busca de Produtos', () => {

//     before(() => {
//         Cypress.on('uncaught:exception', () => false);
//     });

//     it('1. Acesse a página inicial da Kabum', beforeEach(() => {
//         cy.visit("https://www.kabum.com.br/");
//     }));
    

//     it('2. Verifique se a barra de pesquisa está visível.', () => {
//         // verifica se o campo com o id está visível 
//         cy.get('#barraBuscaKabum').should('be.visible');
//     });

//     it('3. Pesquise por um produto específico.', () => {
//         // adiciona "mouse" ao campo de pesquisa
//         cy.get('#input-busca').type('Mouse'); 
//         // clica no botão de pesquisa com determinada classe 
//         cy.get('.sc-eCstlR').click(); 
//     });
  
//     it('4. Confirme se os resultados da pesquisa correspondem ao produto esperado.', () => {
//       // identifica o produto com determinada classe 
//       cy.get('.sc-d79c9c3f-0').should('have.length.greaterThan', 0);
//       // verifica se existe "mouse" no nome do produto  
//       cy.contains('Mouse'); 
//     });
  
//     it('5. Clique em um produto e verifique se a página do produto é carregada corretamente.', () => {
//         // clica no primeiro item da lista
//         cy.get('.sc-d79c9c3f-0').first().click({ force: true });
//         // verifica se existe /produto/ na url 
//         cy.url().should('include', '/produto/');
//       });
//   });
  
  