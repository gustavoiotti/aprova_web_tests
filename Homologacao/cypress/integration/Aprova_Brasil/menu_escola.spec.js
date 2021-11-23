//import TC_L from './login_valido.spec.js';

describe('Acesso aos menus - INSTITUIÇÃO', () =>{

    it('Acesso - Instituição',()=>{
        cy.acessa_aprova()
        cy.logar_instituicao()
        //cy.seleciona_projSimulado()
        cy.wait(5000)
        cy.verifica_dialog_contato_if()
        expect(cy.get('[fxlayout="row"] > :nth-child(1) > .ng-tns-c24-7').contains('ESCOLA DEMONSTRAÇÃO 1')).to.exist
        
    })

    it('Acessa Painel', () =>{
        cy.testa_painel()
    });

    it('Acessa Simulados', () =>{
        cy.testa_simulados()
    });

    it('Acessa Turmas e Alunos', () =>{
        cy.testa_turmas()
    })

    it('Acessa Resultados Gerais', () =>{
        cy.testa_resultados()
    })

    it('Acessa Resultados por Habilidade', () =>{
        cy.testa_resultados_habilidades()
    })

    it('Acessa Relatório por Habilidade', () =>{
        cy.testa_relatorio_habilidade()
    })

    it('Acessa Relatório por Aluno', () =>{
        cy.testa_relatorio_aluno()
    })

    it('Acessa Relatório por Questões Abertas', () =>{
        cy.testa_relatorio_questoesAbertas()
    })
    
    it('Acessa Conteúdo Livros Digitais', () =>{
        cy.testa_conteudo_livrodigital()
    })

    it('Acessa Conteúdo Atv. Complementares', () =>{
        cy.testa_conteudo_atvcompl()
    })

    it('Acessa Conteúdo FAQ', () =>{
        cy.testa_conteudo_ajuda()
    })

    it('Acessa Acompanhamento', () =>{
        // cy.acessa_aprova()
        // cy.logar_instituicao()
        // cy.seleciona_projSimulado()
        // cy.wait(10000)
        // cy.verifica_dialog_contato_if()
        cy.testa_acompanhamento()
    })

    it.only('Acessa Inserir Respostas', () =>{
        cy.acessa_aprova()
        cy.logar_instituicao()
        cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        cy.testa_inserir_respostas()
    });
})