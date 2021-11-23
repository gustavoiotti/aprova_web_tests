describe('Projeto Progressão', () =>{

    it('Revisão de Turmas',()=>{
        cy.acessa_aprova()
        cy.logar_instituicao()
        cy.seleciona_projProgressao()
        cy.wait(5000)
        cy.verifica_dialog_contato_if()

        expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Escola Modelo 01')).to.exist
        
    })

    it('Nova Turma', () =>{
        cy.cria_turma()
    });
    
    it('Novo Login', () =>{
        cy.login_turma()
    });

    it('Editar turma', () =>{
        cy.editar_turma()
    });

    it('Excluir Turma', () =>{
        cy.excluir_turma()
    })

})

it('Teste de progressão',()=>{
    cy.acessa_aprova()
    cy.logar_instituicao()
    cy.seleciona_projProgressao()
    cy.wait(5000)
    cy.verifica_dialog_contato_if()
    expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Escola Modelo 01')).to.exist
    
})

it('Revisão Geral', () =>{
    cy.revisao_geral()
})

it('Revisão de Alunos', () =>{
    cy.revisao_alunos()
})

it('Revisão de Progressão', () =>{
    cy.revisao_progressao()
})


