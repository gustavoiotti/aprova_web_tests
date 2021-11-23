describe('Menus por projeto - Simulado e Avaliação Inicial', () => {
    beforeEach(() => {
        cy.acessa_aprova()
        cy.viewport(1000, 660)
    })

    it('Rede - Simulado', () => {
        cy.logar_rede()
        //cy.seleciona_projSimulado()

        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_rede_simulado()
    });
    it('Rede - Avaliação Inicial', () => {
        cy.logar_rede()
        //cy.seleciona_projAvDiagnostica()
        
        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_rede_av()
    });
    it('Instituição - Simulado', () => {
        cy.logar_instituicao()
        //cy.seleciona_projSimulado()

        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_instituicao_simulado()
        

    });

    it('Instituição - Avaliação Inicial', () => {
        cy.logar_instituicao()
        //cy.seleciona_projAvDiagnostica()
        
        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_instituicao_av()
    });

    it('Regional - Simulado', () => {
        cy.logar_regional()

        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_regional_simulado()

    });

    it('Professor - Simulado', () => {
        cy.logar_professor()
        cy.get('.lista-projetos-dialog > :nth-child(3)').click() //Seleciona projeto demo
        cy.get('.btn-projeto-dialog > .btn').click()

        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_professor_simulado()
    });

    it('Professor - Avaliação Inicial', () => {
        cy.logar_professor()
        //cy.seleciona_projAvDiagnostica()

        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche 

        cy.menu_professor_av()
    });

    it('Conteúdo', () => {
        cy.logar_conteudo()
        cy.wait(2000)
        cy.verifica_dialog_contato_if()
        cy.get('[fxflex="1 0 auto"] > .toggle-button-navbar > .mat-button-wrapper > .mat-icon').click() //Menu sanduiche

        cy.menu_conteudo()

    });
});