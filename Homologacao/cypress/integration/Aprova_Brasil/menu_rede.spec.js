describe('Menus - REDE', () =>{

    it('Acessa - Rede',()=>{
        cy.acessa_aprova()
        cy.logar_rede()
        cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Rede Demonstração')).to.exist
        
    })

    it('Acessa Painel', () =>{
             cy.testa_painel_rede()
         });

    it('Acessa Resultados Gerais', () =>{
        cy.testa_resultados()
    })

    it('Acessa Resultados por Habilidade', () =>{
        cy.testa_resultados_habilidades_rede()
    })

    it('Acessa Calendário', () =>{
        cy.testa_calendario()
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

    // it('Acessa Conteúdo FAQ', () =>{
    //     cy.testa_conteudo_ajuda()
    // })



    it('Acessa Acompanhamento', () =>{
        cy.acessa_aprova()
        cy.logar_rede()
        cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        cy.testa_acompanhamento()
    })

});