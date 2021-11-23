describe('Acesso Auditoria - INSTITUIÇÃO', () =>{

    it('Acesso - Instituição',()=>{
        cy.acessa_aprova()
        cy.logar_instituicao()
        //cy.seleciona_projSimulado()
        cy.wait(5000)
        cy.verifica_dialog_contato_if()
        //expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, Escola Modelo 01')).to.exist
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net/app/audit')
    })
    it('Auditorias', () =>{
        expect(cy.get('.content-tab')).to.exist
    })

    it('Logins', () =>{
        cy.contains('Logins').click()
        //cy.get('#mat-expansion-panel-header-0').click()
        expect(cy.get('.content-tab')).to.exist
    })

    it('Dados de Acesso', () =>{
        cy.contains('Dados de Acesso').click()
        //cy.get('#mat-expansion-panel-header-0').click()
        expect(cy.get('.content-tab')).to.exist
    })
})