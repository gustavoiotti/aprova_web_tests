describe('Logins validos', function TC_L () {

    beforeEach(() => {
        cy.acessa_aprova()
    })
    it('Logar com Rede', function LC_R() {
        cy.logar_rede()
        //cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.url().should('include', '/app/painel')
        cy.verifica_dialog_contato_if()
        cy.contains('Olá, CLIENTE DEMONS')
        // DESLOGAR
        //cy.deslogar()

    });
    it('Logar com Escola', () =>{
        cy.logar_instituicao()
        // SELECIONA PROJETO
        //cy.seleciona_projSimulado()
        cy.wait(10000)
        cy.url().should('include', '/app/painel')
        cy.verifica_dialog_contato_if()
        cy.contains('Olá, ESCOLA DEMONS')
        // DESLOGAR
        //cy.deslogar()

    });
    // it('Logar com Professor', () =>{
    //     cy.logar_professor()
    //     // SELECIONA PROJETO
    //     cy.contains('Simulado').click()
    //     cy.contains('CONFIRMAR').click()
    //     cy.wait(10000)
    //     cy.url().should('include', '/app/painel')
    //     cy.verifica_dialog_contato_if()
    //     cy.contains('Olá, Professor EF1')
    //     // DESLOGAR
    //     cy.deslogar()

    // });
    it('Logar com Regional', () =>{
        cy.logar_regional()
        cy.wait(10000)
        expect(cy.url().should('include', '/app/painel'))
        cy.verifica_dialog_contato_if()
        cy.contains('Olá, REGIONAL DEMO')
        // DESLOGAR
        //cy.deslogar()
    });

    it('Logar com Aluno', () =>{
        cy.logar_aluno()
        cy.wait(10000)
        expect(cy.url().should('include', '/app/painel'))
        cy.verifica_dialog_contato_if()
        cy.contains('Olá, Neymar Jr')
        // DESLOGAR
        //cy.deslogar()
    });

    // it('Trocar projeto', () =>{
        
    //     cy.logar_instituicao()
    //     // SELECIONA PROJETO
    //     cy.seleciona_projSimulado()
    //     cy.wait(10000)
    //     cy.url().should('include', '/app/painel')
    //     cy.verifica_dialog_contato_if()
    //     cy.contains('Olá, Escola Modelo 01')
    //     //TROCAR PROJETO
    //     cy.trocar_projeto()
    //     // DESLOGAR
    //     cy.deslogar()

    // })
});