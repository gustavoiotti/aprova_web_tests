// // describe('Trocar projeto', () =>{
// //     it('trocar projeto', ()=>{
// //         cy.acessa_aprova()
// //         cy.logar_instituicao()
// //         cy.seleciona_projSimulado()
// //         cy.wait(5000)
// //         cy.verifica_dialog_contato_if()
// //         cy.trocar_projeto()
// //     })
// // })

// describe('Testes Lançamentos de Respostas', () => {
//     it('Lançar respostas - LP', () => {
//       cy.acessa_aprova()
//       // cy.visit('/app/login');
//       // cy.viewport(1000, 660)
//       // cy.get('#mat-input-0').type('demo1')
//       // cy.get('#mat-input-1').type('H2VE3G')
//       cy.get('#mat-input-0').type('35244028') // esse ususario só existe em homologação, os testes para esse caso devem ser executados somente em hmg
//       cy.get('#mat-input-1').type('3528')
//       cy.server();
//       cy.route('POST', '**/api/v1/usuarios/login').as('postV1');
//       cy.get('.submit-button').click()
//       cy.wait('@postV1').then((xhr) => {
//         expect(xhr.status).be.eq(200);
//       })
//       // cy.get('.lista-projetos-dialog > :nth-child(4)').click() //Seleciona projeto democy.get('#menu-simulados > .nav-link-title')
//       // cy.get('.btn-projeto-dialog > .btn').click()
//       cy.wait(2000);
//       cy.get('#menu-simulados').click();
//       cy.get('#menu-inserir-respostas').click().trigger('mouseleave');
//       cy.wait(5000);
//       cy.get('#mat-select-0 > div > div.mat-select-value').click();
//       cy.get('#mat-option-0 > span').click();
//       cy.wait(5000);
//       cy.get('#mat-form-field-ano').click();
//       cy.get('#mat-option-3').click();
//       cy.wait(5000);
//       cy.get('#mat-form-field-simulado').click();
//       cy.get('#mat-option-13').click();
//       cy.wait(5000);
//       expect(cy.get('.mat-snack-bar-container').contains('Este aluno respondeu uma ou mais questões via Moderna Edu. Se você alterar as respostas, os resultados e relatórios serão recalculados.')).to.exist
//       cy.get('.mat-simple-snackbar-action').click();
//       expect(cy.get('#header-moderna-edu').contains('Moderna Edu')).to.exist;
//     });
//     it('Lançar Resposta - MT', () => {
//       cy.get('#mat-form-field-disciplina').click();
//       cy.get('#mat-option-1').click();
//       cy.wait(5000);
//       cy.get('#mat-form-field-ano').click();
//       cy.get('#mat-option-18').click();
//       cy.wait(5000);
//       cy.get('#mat-form-field-simulado').click();
//       cy.get('#mat-option-28').click();
//       cy.wait(5000);
//       expect(cy.get('.mat-snack-bar-container').contains('Este aluno respondeu uma ou mais questões via Moderna Edu. Se você alterar as respostas, os resultados e relatórios serão recalculados.')).to.exist
//       cy.get('.mat-simple-snackbar-action').click();
//       expect(cy.get('#header-moderna-edu').contains('Moderna Edu')).to.exist;
//     });
//   })


describe('TESTE de Modal de Pesquisa de Satisfação', () => {
    it('Testa menu notificação', () => {
      cy.viewport(1366, 768)
      //cy.acessa_aprova()
      cy.visit('http://aprovabrasil-dev.azurewebsites.net/app/login')
      cy.logar_instituicao()
      //cy.get('#login-aprova > .mat-button-wrapper').click();
      cy.wait(10000)
      cy.seleciona_projSimulado()
      cy.wait(8000)
      cy.contains('Pesquisa de Satisfação') 
      cy.contains('Ver pesquisa') 
    })
    it('Testa ativar "Abrir Modal de Pesquisa"', () => {
        cy.get('.questionario-btn').click()
        cy.wait(8000)
        cy.contains('Pesquisa de Satisfação')
    })
    it('Testa  "Iniciar Pesquisa"', () => {
        cy.contains('Iniciar pesquisa')
        cy.get('.start-button').click()
    })
    it('Testa "Navegação entre Blocos"', () => {
        cy.get('.btn-next').click()
        expect(cy.get('.nav-ativo').contains('2')).to.exist
        cy.get('.btn-next').click()
        expect(cy.get('.nav-ativo').contains('3')).to.exist
        cy.get('.btn-before').click()
        expect(cy.get('.nav-ativo').contains('2')).to.exist   
        cy.get('.btn-before').click()
        expect(cy.get('.nav-ativo').contains('1')).to.exist  
    })
    it('Testa "Click em responder Radio"', () => {
        cy.server();
        cy.route('POST', '**/api/v1/aprova/questionario/pesquisasatisfacao/questoes').as('postV1');
        cy.get('#mat-radio-137').click() // para alternar 
        cy.get('#mat-radio-138').click()
    
        cy.wait('@postV1').then((xhr) => {
          expect(xhr.status).be.eq(200);
        })
    })
    it('Testa "Click em responder Dissertativa"', () => {
        cy.server();
        cy.route('POST', '**/api/v1/aprova/questionario/pesquisasatisfacao/questoes').as('postV1');
    
        cy.get('#mat-input-7').type('teste teste').blur()
    
        cy.wait('@postV1').then((xhr) => {
          expect(xhr.status).be.eq(200);
        })
    })
});