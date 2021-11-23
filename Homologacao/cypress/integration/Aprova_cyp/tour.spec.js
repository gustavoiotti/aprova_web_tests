describe('Tour - Instituição', () =>{

    it('Acessa - Instituição',()=>{
        cy.acessa_aprova()
        cy.logar_instituicao()
        //cy.seleciona_projSimulado()
        //cy.wait(10000)
        cy.verifica_dialog_contato_if()
        //expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Escola Modelo 01')).to.exist
        
    })
    it('Tour Painel',()=>{
        cy.tourpainel() 
    })
    it('Tour Simulado',()=>{
        cy.toursimulado() 
    })
    it('Tour Turmas e Alunos',()=>{
        cy.tourturmas() 
    })
    it('Tour Resultados Gerais',()=>{
        cy.tourresultadosgerais() 
    })
    it('Tour Resultados Por Alunos', ()=>{
        cy.tourresultadosalunos()
    })
    it('Tour Resultados Por Habilidade',()=>{
        cy.tourresultadoshab() 
    })
    it('Tour Calendário',()=>{
        cy.tourcalendario() 
    }) 
    it('Tour Livro Digital',()=>{
        cy.tourlivros() 
    })
    it('Tour Atividades Complementares',()=>{
        cy.touratv() 
    })
    it('Tour Relatório por Habilidade',()=>{
         cy.tour_relatorio_habilidade() 
    })
    it('Tour Relatório por Aluno',()=>{
        cy.tour_relatorio_aluno() 
    })
    it('Tour Relatório por Questões Abertas',()=>{
        cy.tour_relatorio_questoes() 
    })
    // it('Tour Relatório Conteudo',()=>{
    //     cy.tour_relatorio_conteudo() 
    // })
    it('Tour Acompanhamento',()=>{
        cy.tour_acompanhamento() 
    })
    it('Tour Ajuda',()=>{
        cy.tourajuda() 
    })

})