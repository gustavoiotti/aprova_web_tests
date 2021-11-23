describe('Menus - REGIONAL', () =>{

    it('Acessa Regional',()=>{
        cy.acessa_aprova()
        cy.logar_regional()
        //cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, CABULA')).to.exist
        
    })

    it('Acessa Painel', () =>{
        cy.testa_painel_rede()
    });

    it('Acessa Resultados Gerais', () =>{
        cy.testa_resultados()
        //cy.wait(10000)
    })

    it('Acessa Resultados por Habilidade', () =>{
        cy.testa_resultados_habilidades_rede()
    })

    it('Acessa Relatório por Habilidade', () =>{
        cy.testa_relatorio_habilidade2()
    })

    it('Acessa Relatório por Aluno', () =>{
        cy.testa_relatorio_aluno2()
    })

    it('Acessa Relatório por Questões Abertas', () =>{
        cy.testa_relatorio_questoesAbertas2()
    })
    
    // it('Acessa Conteúdo FAQ', () =>{
    //     cy.testa_conteudo_ajuda()
    // })

    it('Acessa Acompanhamento', () =>{
        cy.acessa_aprova()
        cy.logar_regional()
        //cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        cy.testa_acompanhamento()
    })

});