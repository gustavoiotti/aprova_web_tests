describe('TESTE', () =>{

    it('Perfil Aluno', () =>{
        cy.acessa_aprova()
        cy.logar_aluno()
        //Check componente resultados
        expect(cy.get('#painel-aluno-lancamentos > .ng-tns-c24-7 > :nth-child(1)').contains('Resultados')).to.exist
        //Consulta do gabarito
        //....................
        cy.testa_conteudo_livrodigital()
        cy.testa_conteudo_ajuda()
    })

});