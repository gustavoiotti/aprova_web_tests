describe('TESTE', () =>{

    // it('Menus de Escola',()=>{
    //     cy.acessa_aprova()
    //     cy.logar_instituicao()
    //     cy.seleciona_projSimulado()
    //     cy.wait(5000)
    //     cy.verifica_dialog_contato_if()
    //     cy.testa_resultados()
            
    // })

    // it('Acessar Resultados Alunos Rede', () =>{
    //     //cy.testa_resultados() logar_aluno
    //     cy.testa_resultados_aluno_instituicao()
    // })

    // it('Menus de Professor',()=>{
    //     cy.acessa_aprova()
    //     cy.logar_professor()
    //     cy.seleciona_projSimulado()
    //     cy.wait(10000)
    // })

    // it('Acessar Resultados Alunos Professor', () =>{
    //     cy.testa_resultados()
    //     cy.testa_resultados_aluno_professor()
    // })

    it('Perfil Aluno', () =>{
        cy.acessa_aprova()
        cy.logar_aluno()
        //check componente resultados
        expect(cy.get('#painel-aluno-lancamentos > .ng-tns-c24-7 > :nth-child(1)').contains('Resultados')).to.exist
        //Consulta do gabarito
        //....................
        cy.testa_conteudo_livrodigital()
        cy.testa_conteudo_ajuda()
    })

});