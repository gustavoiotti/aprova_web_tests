// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// const {HIERARQUIA_REGIONAL} = require('../data/hierarquia_regional');
// const {HIERARQUIA_PROFESSOR} = require('../data/hierarquia_professor');
// const {HIERARQUIA_INSTITUICAO} = require('../data/hierarquia_instituicao');


Cypress.Commands.add('acessa_aprova', () => {
    cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
    cy.get('.btn').click()
})

//******************************************************* LOGINS *********************************************************************

Cypress.Commands.add('logar_instituicao', ()=>{
        cy.get('#mat-input-0').type('ITTAPR001')
        cy.get('#mat-input-1').type('APROVADEMO@123')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist
        //cy.get('#login-aprova').click();

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
    })

Cypress.Commands.add('logar_rede', ()=>{
        cy.get('#mat-input-0').type('CLIAPR')
        cy.get('#mat-input-1').type('APROVADEMO@123')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
    })

    Cypress.Commands.add('logar_aluno', ()=>{
        cy.get('#mat-input-0').type('DEMNJ10303')
        cy.get('#mat-input-1').type('Atividade1!')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
    })

Cypress.Commands.add('logar_conteudo', ()=>{
        cy.get('#mat-input-0').type('ABA4717')
        cy.get('#mat-input-1').type('AB17')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
    })

Cypress.Commands.add('logar_professor', ()=>{
        cy.get('#mat-input-0').type('293130@avalia.com')
        cy.get('#mat-input-1').type('FLBFGH')

        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
        //cy.get('.submit-button').click()
    })

Cypress.Commands.add('logar_regional', ()=>{
        cy.get('#mat-input-0').type('REGAPR01')
        cy.get('#mat-input-1').type('APROVADEMO@123')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        //expect(cy.get('.submit-button').click()).to.exist

        expect(cy.contains('FAZER LOGIN').click()).to.exist

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(200);
        })
    })


Cypress.Commands.add('seleciona_projSimulado', () => {
        cy.wait(5000)
        //cy.get('.projetos-dialog-anteriores > :nth-child(3)').click()
        //cy.contains('Simulado').click()
        cy.contains('CONFIRMAR').click()
        //cy.get('.btn-projeto-dialog > .btn > .mat-button-wrapper').click()
    })

Cypress.Commands.add('seleciona_projProgressao', () => {
        cy.wait(5000)
        cy.contains('PROGRESS??O').click()
        cy.contains('CONFIRMAR').click()
    })
Cypress.Commands.add('seleciona_projAvDiagnostica', () => {
        cy.wait(5000)
        cy.contains('DIAGN??STICA').click()
        cy.contains('CONFIRMAR').click()
    })

Cypress.Commands.add('deslogar', () => {
        cy.get('.user-button > .ml-14').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()
    })
    
Cypress.Commands.add('verifica_dialog_contato_if', () => {
        cy.wait(5000)
        cy.get('body').then((body) => {
            if (body.find('mat-dialog-container').length) {
            cy.get('.btn-cancelar').click()
            } else {
            cy.get('.page-header-title').should('be.visible')
            }
        })  
    })


//************************************************************* Progress??o ************************************************************ */

Cypress.Commands.add('cria_turma', () => {
    cy.contains('Criar turma').click()
    cy.contains('Selecione o turno').click()
    cy.contains('Noturno').click()
    cy.get('.mat-slide-toggle-thumb').click() //Muda para digitar o nome da turma
    cy.get('#mat-input-2').click().type('Turma teste 01')
    cy.contains('Salvar').click()
    cy.wait(10000)
})
Cypress.Commands.add('login_turma', () => {
    cy.wait(10000)
    cy.contains('Nova Turma - login de Acesso')
    cy.contains('CONFIRMAR').click()
    //cy.wait(10000)
})
Cypress.Commands.add('editar_turma', () => {
    cy.contains('Turma teste 01').click()
    cy.contains('Editar').click()
    //cy.get('.mat-slide-toggle-thumb').click()
    //cy.get('.mat-slide-toggle-thumb').click()
    cy.get('body').then((body) => {
        if (body.find('#mat-input-2').is(":visible")){
            cy.get('#mat-input-2').clear()            
        } else {
            cy.get('#mat-input-3').clear()
        }
    })
    cy.get('body').then((body) => {
        if (body.find('#mat-input-2').is(":visible")){
            cy.get('#mat-input-2').click().type('Turma teste 02')            
        } else {
            cy.get('#mat-input-3').click().type('Turma teste 02')
        }
    })
    cy.contains('Salvar').click()
    cy.wait(10000)
    cy.contains('Fechar').click()
})
Cypress.Commands.add('excluir_turma', () => {
    cy.contains('Turma teste 01').click()
    cy.contains('Excluir').click()
    cy.contains('Deseja realmente excluir a turma')
    cy.contains('Sim').click()
    //Pegar o turma exclu??da com sucesso
    //cy.wait(10000)
})

Cypress.Commands.add('revisao_geral', () => {
    cy.contains('Revis??o N??meros Gerais').click()
    expect(cy.get('#mat-tab-content-0-0 > div > div > app-revisao-geral > aaf-panel > div')).to.exist
    cy.contains('Progress??o das Turmas - Revis??o Geral')
})

Cypress.Commands.add('revisao_alunos', () => {
    cy.contains('Revis??o de Alunos').click()
    expect(cy.get('#revisao-alunos > aaf-panel > div > div > div > div.mb-40.ng-star-inserted > div.form-alunos.box-revisao')).to.exist //Dados cadastrais
    expect(cy.get('#listaAlunos')).to.exist //Lista de alunos
    cy.contains('Progress??o das Turmas - Revis??o de Alunos')
}) 

Cypress.Commands.add('revisao_progressao', () => {
    cy.contains('Revis??o da Progress??o').click()
    expect(cy.get('#mat-tab-content-0-3 > div > div > app-revisao-progressao > aaf-panel > div > div > div')).to.exist
    cy.contains('Revis??o Progress??o das Turmas')
})



//******************************************************* PAINEL, SIMULADOS E INSERIE RESPOSTAS ************************************************************

Cypress.Commands.add('testa_painel', () => {
    cy.url().should('include', '/app/painel')

    expect(cy.get('#painel-simulados').contains('Cadernos - Inserir respostas')).to.exist
    //expect(cy.get('#painel-calendario').contains('Calend??rio')).to.exist
    expect(cy.get('#painel-acompanhamento').contains('Status das Aplica????es')).to.exist
    expect(cy.get('#painel-resultados').contains('Resultados Parciais')).to.exist
    
})

Cypress.Commands.add('testa_painel_rede', () => {
    cy.url().should('include', '/app/painel')

    //expect(cy.get('#painel-calendario').contains('Calend??rio')).to.exist
    expect(cy.contains('Status das Aplica????es')).to.exist
    expect(cy.contains('Resultados Parciais')).to.exist
    
})

Cypress.Commands.add('testa_simulados', () => {

    cy.get('#menu-simulados > .nav-link-title').click()
    cy.get('#menu-listar-simulados').click().trigger('mouseleave')
    //cy.contains('SIMULADOS').click() #menu-inserir-respostas 
    //cy.contains('LISTA DE SIMULADOS').click()

    cy.url().should('include', '/app/simulados/listar')

    expect(cy.get('#sidenav-filtros').contains('Filtre Resultados')).to.exist
    expect(cy.get('#tela-simulados')).to.exist  
})

Cypress.Commands.add('testa_inserir_respostas', () => {

    cy.get('#menu-simulados > .nav-link-title').click()
    cy.get('#menu-inserir-respostas').click().trigger('mouseleave')
    cy.wait(10000)

    cy.url().should('include', '/app/simulados/lancamento')

    expect(cy.contains('Turmas Participantes')).to.exist
    // expect(cy.contains('Disciplinas')).to.exist
    // expect(cy.contains('Ano Escolar')).to.exist
    // expect(cy.contains('Simulado')).to.exist
    expect(cy.contains('Lista de Alunos')).to.exist
    //expect(cy.contains('Folha de Respostas')).to.exist  
})

//******************************************************* ACOMPANHAMENTO E TURMAS *******************************************************

Cypress.Commands.add('testa_acompanhamento', () => {
    cy.get('#menu-gestao').click()
    cy.get('#menu-acompanhamento').click().trigger('mouseleave')

    cy.url().should('include', '/app/acompanhamento') 
})

Cypress.Commands.add('testa_turmas', () => {
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-turmas-alunos').click().trigger('mouseleave')

    cy.url().should('include', '/app/turmas/alunos')

    expect(cy.get('#turmas-participantes').contains('Turmas Participantes')).to.exist
    expect(cy.get('#listaAlunos').contains('Lista de Alunos')).to.exist
})

//******************************************************* RESULTADOS *******************************************************************

Cypress.Commands.add('testa_resultados', () => {
    cy.get('#menu-simulados > .nav-link-title').click()
    cy.get('#menu-resultados').click().trigger('mouseleave')

    cy.url().should('include', '/app/simulados/resultados')

    //cy.wait(20000)
    expect(cy.get('#distribuicao-nivel-acerto')).to.exist
    expect(cy.get('app-xresultados-resumo-geral-card')).to.exist
    //expect(cy.get('.tabela-resultados').contains('Resultados das regionais')).to.exist   
    expect(cy.get('#sidenav-filtros').contains('Filtre Resultados')).to.exist

})

Cypress.Commands.add('testa_resultados_habilidades', () => {
    cy.get('.switch-container > :nth-child(2) > a').click()

    expect(cy.contains('Distribui????o dos alunos por n??vel de acerto')).to.exist
    expect(cy.get('app-xresultados-resumo-habilidade-card')).to.exist
    expect(cy.get('.tabela-resultados').contains('Resultados das regionais')).to.exist   
    expect(cy.get('#sidenav-filtros').contains('Filtre Resultados')).to.exist
})

Cypress.Commands.add('testa_resultados_habilidades_rede', () => {
    cy.get('.switch-container > :nth-child(2) > a').click()

    //expect(cy.get('#container-distribuicao > .ng-tns-c54-68 > .distribuicao').contains('Distribui????o dos alunos por n??vel de acerto')).to.exist
    expect(cy.get('app-xresultados-resumo-habilidade-card')).to.exist
    expect(cy.get('.tabela-resultados').contains('Resultados das regionais')).to.exist   
    expect(cy.get('#sidenav-filtros').contains('Filtre Resultados')).to.exist
})

//******************************************************* RELAT??RIOS *********************************************************************

Cypress.Commands.add('testa_relatorio_habilidade', () => {
    //R. por habilidade
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-habilidade').click().trigger('mouseleave')
    cy.url().should('include', '/app/relatorios/habilidade')
    
    //cy.get('#mat-option-0').click
    // cy.contains('Nenhuma op????o selecionada').click()
    // cy.get('#container-page').click()
    // cy.wait(5000)
    // cy.contains('Nenhuma op????o selecionada').click()
    // cy.contains('1?? ANO').click()
    // cy.contains('Nenhuma op????o selecionada').click()
    // cy.contains('Simulado 1').click()
    // cy.get('#gerar-relatorio > .btn').click()
    // expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})

Cypress.Commands.add('testa_relatorio_habilidade3', () => {
    //R. por habilidade
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-habilidade').click().trigger('mouseleave')
    cy.url().should('include', '/app/relatorios/habilidade')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('3?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})

Cypress.Commands.add('testa_relatorio_habilidade2', () => {
    //R. por habilidade
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-habilidade').click().trigger('mouseleave')

    cy.url().should('include', '/app/relatorios/habilidade')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('5?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})

Cypress.Commands.add('testa_relatorio_aluno', () => {
    //R. por aluno
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-aluno').click().trigger('mouseleave')

    cy.url().should('include', '/app/relatorios/aluno')
    // cy.contains('Nenhuma op????o selecionada').click()
    // cy.contains('1?? ANO').click()
    // cy.contains('Nenhuma op????o selecionada').click()
    // cy.contains('Simulado 1').click()
    // cy.get('#gerar-relatorio > .btn').click()
    // expect(cy.get('#tabela-relatorio > div > aaf-panel > div > div > div > mat-table')).to.exist
})

Cypress.Commands.add('testa_relatorio_aluno3', () => {
    //R. por aluno
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-aluno').click().trigger('mouseleave')

    cy.url().should('include', '/app/relatorios/aluno')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('3?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > div > aaf-panel > div > div > div > mat-table')).to.exist
})

Cypress.Commands.add('testa_relatorio_aluno2', () => {
    //R. por aluno
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-aluno').click().trigger('mouseleave')

    cy.url().should('include', '/app/relatorios/aluno')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('5?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > div > aaf-panel > div > div > div > mat-table')).to.exist
})

Cypress.Commands.add('testa_relatorio_questoesAbertas', () => {
    //R. quest??es abertas
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-questoes-abertas').click().trigger('mouseleave')

    cy.url().should('include', '/app/relatorios/questoes-abertas')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('1?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})

Cypress.Commands.add('testa_relatorio_questoesAbertas3', () => {
    //R. quest??es abertas
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-questoes-abertas').click().trigger('mouseleave')
    
    cy.url().should('include', '/app/relatorios/questoes-abertas')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('3?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})

Cypress.Commands.add('testa_relatorio_questoesAbertas2', () => {
    //R. quest??es abertas
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-questoes-abertas').click().trigger('mouseleave')
    
    cy.url().should('include', '/app/relatorios/questoes-abertas')
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('5?? ANO').click()
    cy.contains('Nenhuma op????o selecionada').click()
    cy.contains('Simulado 1').click()
    cy.get('#gerar-relatorio > .btn').click()
    expect(cy.get('#tabela-relatorio > :nth-child(1) > .aaf-panel > .aaf-panel-content > .aaf-panel-body')).to.exist
})


//******************************************************* LIVROS *********************************************************************

Cypress.Commands.add('testa_conteudo_livrodigital', () =>{ 
    cy.get('#menu-conteudos').click()
    cy.get('#menu-livro-digital').click()

    cy.url().should('include', '/app/livro-digital')

    expect(cy.get('#sidenav-filtros')).to.exist
    expect(cy.get('#tela-atividades')).to.exist
})

//******************************************************* ATV. COMPLEMENTARES *********************************************************

Cypress.Commands.add('testa_conteudo_atvcompl', () =>{ 
    cy.get('#menu-conteudos').click()
    cy.get('#menu-atividades-complementares').click().trigger('mouseleave')
    //cy.get('#menu-faq > span').click()

    cy.url().should('include', '/app/atividades-complementares')

    expect(cy.get('#sidenav-filtros')).to.exist
    expect(cy.get('#tela-atividades')).to.exist
    cy.get('.warn-text').contains('Para iniciar a busca, por favor selecione uma Disciplina e T??pico')
    cy.contains('Disciplina').click()
    //cy.get(':nth-child(1) > .w-100-p > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    cy.contains('Matem??tica').click()
    //cy.contains('T??pico').click()
    //cy.contains('E2').click()
    //cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-value').click()
    //cy.contains('Habilidade').click()
    //cy.contains('2E2.1').click()
    //expect(cy.get('.warn-text').contains('Nenhum resultado para o filtro selecionado')).to.exist
})

Cypress.Commands.add('testa_projConteudo_atvComplementar', () =>{ 
    cy.get('#menu-conteudos').click()
    cy.get('#menu-atividades-complementares').click().trigger('mouseleave')

    cy.url().should('include', '/app/atividades-complementares')

    expect(cy.get('#sidenav-filtros')).to.exist
    expect(cy.get('#tela-atividades')).to.exist
    cy.get('.warn-text').contains('Para iniciar a busca, por favor selecione uma Disciplina e T??pico')
    cy.contains('Disciplina').click()
    //cy.get(':nth-child(1) > .w-100-p > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    cy.contains('Matem??tica').click()
    cy.contains('T??pico').click()
    cy.contains('E2').click()
    // cy.contains('Habilidade').click()
    // cy.contains('2E2.1').click()
    //expect(cy.get('.warn-text').contains('Nenhum resultado para o filtro selecionado')).to.exist
})

Cypress.Commands.add('testa_projConteudo_atvComplementar3', () =>{ 
    cy.get('#menu-conteudos').click()
    cy.get('#menu-atividades-complementares').click().trigger('mouseleave')

    cy.url().should('include', '/app/atividades-complementares')

    expect(cy.get('#sidenav-filtros')).to.exist
    expect(cy.get('#tela-atividades')).to.exist
    cy.get('.warn-text').contains('Para iniciar a busca, por favor selecione uma Disciplina e T??pico')
    cy.contains('Disciplina').click()
    //cy.get(':nth-child(1) > .w-100-p > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    cy.contains('Matem??tica').click()
    cy.contains('T??pico').click()
    cy.contains('T1').click()
    cy.contains('Habilidade').click()
    cy.contains('D1').click()
    expect(cy.get('.atividade-list')).to.exist
})

//******************************************************* CONHECENDO APROVA E AJUDA ***************************************************

Cypress.Commands.add('testa_projConteudo_conhecendoAprova', () =>{ 
    cy.get('#menu-conteudos').click()
    //cy.get('#menu-ead-conhecendo').click()
    cy.contains('APROVA BRASIL').click()

    cy.url().should('include', 'http://modernaedu.com.br/my/')

})

Cypress.Commands.add('testa_conteudo_ajuda', () =>{ 
    cy.get('#menu-conteudos').click()
    cy.get('#menu-faq').click().trigger('mouseleave')

    cy.url().should('include', '/app/ajuda')

    expect(cy.get('#container-page')).to.exist
})

//******************************************************* CALEND??RIO ******************************************************************

Cypress.Commands.add('testa_calendario', () =>{ 
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.contains('Calend??rio').click()
    cy.url().should('include', '/app/calendario')

    expect(cy.get('#container-page')).to.exist
})

//**********************************************************  TOUR ******************************************************************* */
Cypress.Commands.add('tour', () =>{
    cy.contains('Ver Tutorial').click
})

Cypress.Commands.add('tourpainel', () =>{
    //cy.get('#tutorial > .btn > .mat-button-wrapper').click
    cy.contains('Ver Tutorial').click()
    cy.contains('Bem-vindo a plataforma do Aprova Brasil. Este guia lhe mostrar?? como utilizar a plataforma. Vamos l??!')
    cy.contains('Pr??ximo').click()
    cy.contains('Nesta ??rea voc?? encontra o nome do projeto na sua rede. Caso tenha participado de anos anteriores, poder?? consultar por aqui.')
    cy.contains('Pr??ximo').click()
    cy.contains('Este ?? o menu principal de navega????o, onde voc?? pode encontrar todas as op????es dispon??veis de acordo com seu perfil de acesso.')
    cy.contains('Pr??ximo').click()
    cy.contains('Em todas as ??reas voc?? sempre encontrar?? o link (Ver mais) que leva voc?? para a p??gina com mais detalhes deste assunto.')
    cy.contains('Pr??ximo').click()
    cy.contains('Nesta aba est??o dispon??veis as principais informa????es referentes ao projeto.')
    cy.contains('Pr??ximo').click()
    // cy.contains('Neste espa??o voc?? encontra os cursos que voc?? est?? inscrito no Moderna Edu. Clique para acessar o curso desejado.')
    // cy.contains('Pr??ximo').click()
    cy.contains('Esta ??rea lhe mostra as pr??ximas atividades do projeto em sua escola.')
    cy.contains('Pr??ximo').click()
    cy.contains('Aqui voc?? encontra os simulados dispon??veis para o lan??amento das respostas dos alunos e o per??odo de aplica????o.')
    cy.contains('Pr??ximo').click()
    cy.contains('Apresenta o status de aplica????o dos simulados Aprova Brasil, com percentual de participa????o por simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Aqui voc?? verifica os resultados gerais de sua escola at?? o momento.')
    cy.contains('Pr??ximo').click()
    cy.contains('Nesta ??rea est??o dispon??veis os dados gerais dos alunos, turmas e professores participantes do Projeto.')
    cy.contains('Concluir').click()
})

Cypress.Commands.add('toursimulado', () =>{
    cy.contains('Simulados').click() //#menu-listar-simulados > span
    cy.get('#menu-listar-simulados').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Aqui voc?? encontra as informa????es sobre os simulados, como datas, segmentos e mat??rias.')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel visualizar os cadernos de acordo com os filtros selecionados.')
    cy.contains('Pr??ximo').click()
    cy.contains('Cada caderno ser?? exposto com capa, dados e op????es de verificar os resultados do lan??amento ou realizar o download do Simulado.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourturmas', () =>{
    cy.contains('Gest??o').click()
    cy.get('#menu-turmas-alunos').click()
    //cy.contains('TURMAS').click() #menu-turmas-alunos > span
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Nesta op????o voc?? poder?? incluir, editar ou mesmo excluir alunos e turmas de uma escola.')
    cy.contains('Pr??ximo').click()
    cy.contains('O filtro permite consultar por Escola, Ano Escolar e turma.')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel tamb??m pesquisar pelo nome do aluno independente da Escola, Ano ou Turma.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite a consulta pelo nome do aluno, dentro da turma selecionada e se desej??vel, incluir novo aluno e excluir aluno da turma. A exclus??o n??o remove dos dados do simulados que o aluno participou.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite inserir e alterar os dados do aluno da turma selecionada.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourresultadosgerais', () =>{
    cy.contains('Simulados').click()
    cy.get('#menu-resultados').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Os resultados s??o dados de desempenho organizados por Turma e Alunos.')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel visualizar os percentuais de acertos de acordo com os filtros selecionados.')
    cy.contains('Pr??ximo').click()
    cy.contains('H?? tr??s vis??es para verificar o percentual de acerto das quest??es, sendo de modo geral, por habilidade ou por aluno.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe o percentual de respostas e acerto de cada Disciplina, de acordo com o filtro selecionado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Lista as Turmas, exibindo o percentual de respostas e acerto de cada Disciplina, de acordo com o filtro selecionado. Clicando em um item da lista, ?? poss??vel avan??ar um n??vel de detalhamento, mostrando os resultados por Aluno.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourresultadoshab', () =>{
    cy.contains('Por Habilidade').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Na vis??o por habilidade, s??o exibidos os percentuais de cada habilidade das disciplinas consultadas.')
    cy.contains('Pr??ximo').click()
    cy.contains('Clicando em cada Habilidade, ?? poss??vel visualizar a descri????o completa da Habilidade.')
    cy.contains('Pr??ximo').click()
    cy.contains('E a partir da Habilidade ?? poss??vel visualizar todas as quest??es que a contemplam.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe o percentual de acerto de cada Disciplina, de acordo com o filtro selecionado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Lista as turmas, exibindo percentual de acertos para cada habilidade.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourresultadosalunos', () =>{
    cy.contains('Aluno').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Aqui ?? poss??vel verificar uma lista de alunos de acordo com o percentual de acerto.')
    cy.contains('Pr??ximo').click()
    cy.contains('Para chegar na lista desejada, deve-se primeiro filtrar os resultados')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel tamb??m filtrar pelo percentual de acerto dos alunos, separados em 4 n??veis.Para chegar na lista desejada, deve-se primeiro filtrar os resultados')
    cy.contains('Pr??ximo').click()
    cy.contains('Os alunos s??o exibidos na parte debaixo da tela, de acordo com os filtros selecionados')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourcalendario', () =>{
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.contains('Calend??rio').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('O menu calend??rio re??ne as datas mais importantes do projeto, como por exemplo a data limite de lan??amento das respostas de um simulado.')
    //cy.contains('Pr??ximo').click()
    cy.contains('O menu calend??rio re??ne as datas mais importantes do projeto, como por exemplo a data limite de lan??amento das respostas de um simulado.')
    cy.get('.introjs-nextbutton').click()
    cy.contains('?? poss??vel filtrar pelo tipo de evento e visualizar quais ser??o os pr??ximos.')
    cy.get('.introjs-nextbutton').click()
    //cy.contains('Pr??ximo').click()
    cy.contains('Clicando no evento, ?? poss??vel ver mais informa????es sobre ele.')
    cy.get('.introjs-nextbutton').click()
    //cy.contains('Pr??ximo').click()
    cy.contains('Ou ent??o ?? poss??vel navegar no calend??rio para encontrar todos os eventos.')
    cy.get('.introjs-nextbutton').click()
    //cy.contains('Pr??ximo').click()
    cy.contains('Para ver todos os eventos que ocorrem num mesmo dia, basta clicar em Mostrar Mais.')
    cy.get('.introjs-nextbutton').click()
    //cy.contains('Pr??ximo').click()
    cy.contains('Todos os eventos do dia ser??o listados.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourrelatorio_habilidade', () =>{
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-habilidade').click().trigger('mouseleave')
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Os relat??rios s??o dados de desempenho organizados em tabelas e planilhas para download.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite gerar um relat??rio com vis??o por habilidade, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe os t??picos e descritores com sua quantidade de erros e acertos, possibilitando a exporta????o em planilha.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourrelatorio_aluno', () =>{
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-alunos').click().trigger('mouseleave')
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Permite gerar um relat??rio com vis??o por desempenho de aluno, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe o percentual de acertos das disciplinas de cada aluno, possibilitando a exporta????o em planilha.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourlivros', () =>{
    cy.get('#menu-conteudos').click()
    cy.get('#menu-livro-digital').click()
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Aqui voc?? encontra os livros Digitais do projeto Aprova Brasil.')
    cy.get('.introjs-nextbutton').click()
    cy.contains('?? poss??vel visualizar os livros de acordo com os filtros selecionados')
    cy.contains('Pr??ximo').click()
    cy.contains('Cada livro ser?? exposto com capa, dados e op????o de realizar a abertura dos livros digitais.')
    cy.contains('Concluir').click()

})
Cypress.Commands.add('touratv', () =>{
    cy.get('#menu-conteudos').click()
    cy.get('#menu-atividades-complementares').click()
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Aqui voc?? encontra Atividades Complementares do projeto Aprova Brasil.')
    cy.get('.introjs-nextbutton').click()
    cy.contains('?? poss??vel visualizar as atividades complementares de acordo com os filtros selecionados')
    cy.contains('Pr??ximo').click()
    cy.contains('Para a consulta das atividades deve ser selecionada ao menos uma Disciplina e um T??pico. ?? poss??vel tamb??m filtrar por uma habilidade espec??fica.')
    cy.contains('Pr??ximo').click()
    cy.contains('Cada atividades ser?? exposta com seus dados e op????o de realizar o download da atividade complementar')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tourajuda', () =>{
    cy.get('#menu-conteudos').click()
    cy.get('#menu-faq').click()
    cy.get('.search').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Caso tenha d??vidas sobre o uso da plataforma, voc?? poder?? acessar o menu de Ajuda para visualizar as perguntas frequentes das funcionalidades.')
    cy.contains('Pr??ximo').click()
    cy.contains('Digite no campo abaixo os termos referente ao conte??do que deseja pesquisar')
    cy.contains('Pr??ximo').click()
    cy.contains('Se ainda continuar com d??vida, pode clicar em Entre em Contato para que possamos ajudar no que precisa atrav??s do nosso canal de atendimento')
    cy.contains('Concluir').click()
})

Cypress.Commands.add('tour_relatorio_questoesAbertas', () => {
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-questoes-abertas').click().trigger('mouseleave')
    cy.url().should('include', '/app/relatorios/questoes-abertas')
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Permite gerar um relat??rio com vis??o por desempenho de aluno, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Para os lan??amentos de quest??es abertas, ser?? exibida o percentual marcado em cada op????o')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tour_relatorio_habilidade', () => {
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-habilidade').click().trigger('mouseleave')
    //cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.get('#tutorial > .btn').click()
    // cy.contains('Ver Tutorial').click()
    cy.contains('Os relat??rios s??o dados de desempenho organizados em tabelas e planilhas para download.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite gerar um relat??rio com vis??o por habilidade, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe os t??picos e descritores com sua quantidade de erros e acertos, possibilitando a exporta????o em planilha.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tour_relatorio_aluno', () => {
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-aluno').click()
    //cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Os relat??rios s??o dados de desempenho organizados em tabelas e planilhas para download.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite gerar um relat??rio com vis??o por desempenho de aluno, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Exibe o percentual de acertos das disciplinas de cada aluno, possibilitando a exporta????o em planilha.')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tour_relatorio_questoes', () => {
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-questoes-abertas').click()
    //cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Os relat??rios s??o dados de desempenho organizados em tabelas e planilhas para download.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite gerar um relat??rio com vis??o por desempenho de quest??es abertas, pesquisando por ano escolar e simulado.')
    cy.contains('Pr??ximo').click()
    cy.contains('Para os lan??amentos de quest??es abertas, ser?? exibida o percentual marcado em cada op????o')
    cy.contains('Concluir').click()
})

Cypress.Commands.add('tour_relatorio_conteudo', () => {
    //troca projeto
    
    //cy.get('.projeto').click()
    cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
    cy.get('.btn').click()
    //cy.get('.lista-projetos-dialog > :nth-child(3)').click()

    cy.get('#mat-input-0').type('demo1')
    cy.get('#mat-input-1').type('deo1')

    expect(cy.get('.submit-button')).to.exist
    cy.get('.submit-button').click()
    
    cy.contains('Avalia????o Inicial').click()
    cy.contains('CONFIRMAR').click()

    //tour relat??rio conte??do
    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-relatorios > .nav-link-title').click()
    cy.get('#menu-relatorios-comparacao').click().trigger('mouseleave')
    //cy.get('#menu-relatorios-comparacao > span').click()
    cy.get('.page-header-title').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('Aqui ?? poss??vel comparar os resultados por disciplina entre os anos da escola')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel visualizar tamb??m em formato de relat??rio')
    cy.contains('Concluir').click()
})
Cypress.Commands.add('tour_acompanhamento', () => {
    cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
    cy.get('.btn').click()

    cy.logar_instituicao()

    cy.get('#menu-gestao > .nav-link-title').click()
    cy.get('#menu-acompanhamento').click()
    cy.wait(5000)
    cy.contains('Ver Tutorial').click()
    cy.contains('?? poss??vel acompanhar o andamento do projeto em sua Escola.')
    cy.contains('Pr??ximo').click()
    cy.contains('No Status das Aplica????es, ?? poss??vel visualizar e filtrar os dados para verificar o status de lan??amento das respostas, at?? chegar ao n??vel de aluno.')
    cy.contains('Pr??ximo').click()
    cy.contains('Nestes campos, ?? poss??vel filtrar os valores apresentados por Segmento e por Disciplina.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite que o resultado da busca seja exportado em formato PDF.')
    cy.contains('Pr??ximo').click()
    cy.contains('Em cada quadro ?? exibido a quantidade e o percentual de alunos que tiveram suas respostas lan??adas contra o esperado.')
    cy.contains('Pr??ximo').click()
    cy.contains('?? poss??vel tamb??m organizar os dados da lista por T??tulo ou por percentual respondido.')
    cy.contains('Pr??ximo').click()
    cy.contains('Permite consultar pelos valores da lista para encontrar um determinado item para selecionar.')
    cy.contains('Pr??ximo').click()
    cy.contains('Para abrir mais um n??vel, deve clicar na linha desejada para que possa ser expandida a pr??xima lista. ?? sempre poss??vel alterar a op????o selecionada e refazer a consulta.')
    cy.contains('Concluir').click()
})


//******************************************* TROCA PROJETO ************************************************************************ */
Cypress.Commands.add('trocar_projeto', () => {
   cy.contains('2020 - APROVA DEMONSTRA????O').click()
   //cy.get('.projeto')
   cy.contains('2020 - AVALIA????O DIAGN??STICA').click()
   //cy.get('.lista-projetos-dialog > :nth-child(3)')
   cy.contains('CONFIRMAR').click()
   cy.wait(5000)
   //cy.get('.btn-projeto-dialog > .btn-blue > .mat-button-wrapper')
   cy.contains('2020 - AVALIA????O DIAGN??STICA')

})

Cypress.Commands.add('pular_cadastro', () => {
    cy.get('body').then((body) => { //body.find('label:contains(CANCELAR)').is(":visible")
            if (body.find('label:contains(CANCELAR)').is(":visible")){
                    cy.get('.btn-cancelar').click()            
            } else {
                cy.get('.page-header-title').should('be.visible')
            }
        })
    
})

//********************************************************** Menus Laterais *************************************************************

Cypress.Commands.add('menu_instituicao_simulado', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        cy.contains('Turmas e alunos') //Turmas e Alunos
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Lista de Simulados') //Lista de simulados
        cy.contains('Inserir Respostas') //Inserir Respostas
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //EAD
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
        //cy.contains('Aprova Brasil EAD')
    
})

Cypress.Commands.add('menu_instituicao_av', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        cy.contains('Turmas e alunos') //Turmas e Alunos
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por compara????o')
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Lista de Simulados') //Lista de simulados
        cy.contains('Inserir Respostas') //Inserir Respostas
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //EAD
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
})

Cypress.Commands.add('menu_rede_simulado', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //cy.contains('Ajuda')
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
        //cy.contains('Aprova Brasil EAD')
})

Cypress.Commands.add('menu_rede_av', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por compara????o')
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //EAD
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
})

Cypress.Commands.add('menu_regional_simulado', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
})

Cypress.Commands.add('menu_professor_simulado', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Lista de Simulados') //Lista de simulados
        cy.contains('Inserir Respostas') //Inserir Respostas
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //EAD
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
        //cy.contains('Aprova Brasil EAD')
})

Cypress.Commands.add('menu_professor_av', () => {
        cy.contains('Painel') //Painel
        //Gest??o
        cy.contains('Status das Aplica????es') //Status da ap.
        cy.contains('Calend??rio') //Calend??rio
        //Relat??rios
        cy.contains('Desempenho por habilidade') //R. habilidade
        cy.contains('Desempenho por aluno') //R. Aluno
        cy.contains('Desempenho por quest??es abertas') //R. Quest??es abertas
        //Simulados
        cy.contains('Lista de Simulados') //Lista de simulados
        cy.contains('Inserir Respostas') //Inserir Respostas
        cy.contains('Resultados') //Resultados
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
        //EAD
        //cy.contains('Conhecendo o Aprova Brasil') //Conhecendo o Aprova
})

Cypress.Commands.add('menu_conteudo', () => {
        //Conte??dos
        cy.contains('Livro Digital') //Livros digitais
        cy.contains('Atividades Complementares') //At. complementares
        //cy.contains('Manual da Plataforma') //Manual da Plataforma
})

//************************************ Resultados por Aluno ***************************************** */


Cypress.Commands.add('testa_resultados_aluno_rede', () => {
    expect(cy.get('.username-wrapper > [fxhide=""]').contains('Ol??, Escola Modelo 01')).to.exist
        
    cy.get('.switch-container > :nth-child(3) > a').click()

    expect(cy.get('#filtro-pagina')).to.exist
    expect(cy.get('#filtro-pagina').contains('Regional')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Escola')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Ano')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Turma')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Simulado')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Disciplina')).to.exist   

    cy.contains('Selecione ...').click()
    cy.contains('??nico').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('Escola Modelo 01').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('1?? ANO EF I').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('A - Matutino').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('Simulado 1').click()
    cy.wait(1000)
    cy.contains('Pesquisar').click()
    cy.wait(1000)
    cy.contains('Resultado dos Alunos').click()
    cy.wait(1000)
    cy.contains('N??vel 1').click()
    cy.wait(1000)
    cy.contains('N??vel 2').click()
    cy.wait(1000)
    cy.contains('N??vel 3').click()
    cy.wait(1000)
    cy.contains('N??vel 4').click()
})

Cypress.Commands.add('testa_resultados_aluno_professor', () => {
    
    // cy.setDadosHierarquia({
    //     data: HIERARQUIA_PROFESSOR,
    //     possuiRegionalUnica: true,
    //     possuiInstituicaoUnica: true,
    //     possuiTurmaUnica: true
    // });
    
    cy.get('.switch-container > :nth-child(3) > a').click()
    
    cy.get('body').then((body) => {
        if(body.find('.introjs-skipbutton').length) {
            cy.get('.introjs-skipbutton').click()
        }
    });

    expect(cy.get('#filtro-pagina')).to.exist
    expect(cy.get('#filtro-pagina').contains('Turma')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Simulado')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Disciplina')).to.exist   

    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.contains('A - Matutino').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('Simulado 1').click()
    cy.wait(1000)
    cy.contains('Pesquisar').click()
    cy.wait(1000)
    cy.contains('Resultado dos Alunos').click()
    cy.wait(1000)
    cy.contains('N??vel 1').click()
    cy.wait(1000)
    cy.contains('N??vel 2').click()
    cy.wait(1000)
    cy.contains('N??vel 3').click()
    cy.wait(1000)
    cy.contains('N??vel 4').click()
})

Cypress.Commands.add('testa_resultados_aluno_regional', () => {
    
    // cy.setDadosHierarquia({
    //     data: HIERARQUIA_REGIONAL,
    //     possuiRegionalUnica: true,
    //     possuiInstituicaoUnica: false,
    //     possuiTurmaUnica: false
    // });
    
    cy.get('.switch-container > :nth-child(3) > a').click()
    
    cy.get('body').then((body) => {
        if(body.find('.introjs-skipbutton').length) {
            cy.get('.introjs-skipbutton').click()
        }
    });

    expect(cy.get('#filtro-pagina')).to.exist
    expect(cy.get('#filtro-pagina').contains('Turma')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Simulado')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Disciplina')).to.exist   

    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.contains('ESCOLA MUNICIPAL 22 DE ABRIL').click()
    cy.wait(1000)
    //cy.get('.mat-select-value-text > .ng-tns-c61-161').click()
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('5?? ANO EF I').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('A - Matutino').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('Simulado 1').click()
    cy.wait(1000)
    cy.contains('Pesquisar').click()
    cy.wait(1000)
    cy.contains('Resultado dos Alunos').click()
    cy.wait(1000)
    cy.contains('N??vel 1').click()
    cy.wait(1000)
    cy.contains('N??vel 2').click()
    cy.wait(1000)
    cy.contains('N??vel 3').click()
    cy.wait(1000)
    cy.contains('N??vel 4').click()
})

Cypress.Commands.add('testa_resultados_aluno_instituicao', () => {
    
    // cy.setDadosHierarquia({
    //     data: HIERARQUIA_INSTITUICAO,
    //     possuiRegionalUnica: true,
    //     possuiInstituicaoUnica: true,
    //     possuiTurmaUnica: false
    // });
    
    cy.get('.switch-container > :nth-child(3) > a').click()
    
    // cy.get('body').then((body) => {
    //     if(body.find('.introjs-skipbutton').length) {
    //         cy.get('.introjs-skipbutton').click()
    //     }
    // });

    expect(cy.get('#filtro-pagina')).to.exist
    expect(cy.get('#filtro-pagina').contains('Turma')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Simulado')).to.exist   
    expect(cy.get('#filtro-pagina').contains('Disciplina')).to.exist   

    cy.wait(1000)
    //cy.contains('Selecione ...').click()
    cy.get('#mat-select-4 > .mat-select-trigger').click()
    cy.wait(1000)
    cy.contains('1?? ANO EF I').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('A - Matutino').click()
    cy.wait(1000)
    cy.contains('Selecione ...').click()
    cy.wait(1000)
    cy.contains('Simulado 1').click()
    cy.wait(1000)
    cy.contains('Pesquisar').click()
    cy.wait(1000)
    cy.contains('Resultado dos Alunos').click()
    cy.wait(1000)
    cy.contains('N??vel 1').click()
    cy.wait(1000)
    cy.contains('N??vel 2').click()
    cy.wait(1000)
    cy.contains('N??vel 3').click()
    cy.wait(1000)
    cy.contains('N??vel 4').click()
})

Cypress.Commands.add('setDadosHierarquia', (hierarquia) => {
    window.localStorage.setItem("aprovabr.hierarquia", JSON.stringify(hierarquia.data))
    window.localStorage.setItem("aprovabr.possuiRegionalUnica", hierarquia.possuiRegionalUnica)
    window.localStorage.setItem("aprovabr.possuiInstituicaoUnica", hierarquia.possuiInstituicaoUnica)
    window.localStorage.setItem("aprovabr.possuiTurmaUnica", hierarquia.possuiTurmaUnica)
})