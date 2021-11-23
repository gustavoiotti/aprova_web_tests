describe('Menus - PROFESSOR', () =>{

    it('Acessa Professor',()=>{
        cy.acessa_aprova()
        cy.logar_professor()
        cy.wait(10000)
        //cy.seleciona_projSimulado()
        cy.verifica_dialog_contato_if()
        //cy.get('.lista-projetos-dialog > :nth-child(3)').click()
        //cy.get('.btn-projeto-dialog > .btn').click()
        cy.wait(10000)
        cy.verifica_dialog_contato_if()
        expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Professor EF1')).to.exist
        
    })

    it('Acessa Painel', () =>{
             cy.testa_painel()
         });

    it('Acessa Simulados', () =>{
        cy.testa_simulados()
    });

    it('Acessa Resultados Gerais', () =>{
        cy.testa_resultados()
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
    
    it('Acessa Conteúdo Livros Digitais', () =>{
        cy.testa_conteudo_livrodigital()
    })

    it('Acessa Conteúdo Atv Complementar', () =>{
        cy.testa_projConteudo_atvComplementar3()
    })

    // it('Acessa Conteúdo FAQ', () =>{
    //     cy.testa_conteudo_ajuda()
    // })

    it('Acessa Acompanhamento', () =>{
        cy.acessa_aprova()
        cy.logar_professor()
        //cy.get('.lista-projetos-dialog > :nth-child(3)').click()
        //cy.get('.btn-projeto-dialog > .btn').click()
        //cy.wait(10000)
        cy.verifica_dialog_contato_if()
        cy.testa_acompanhamento()
    })

});