describe('Menus - CONTEÚDO', () =>{

    it('Menus - Instituição CONTEÚDO',()=>{
        cy.acessa_aprova()
        cy.logar_conteudo()
        // cy.seleciona_projSimulado()
        //cy.pular_cadastro();
        // cy.wait(10000)
        // cy.get('body').then((body) => {
        //     if (body.find('label:contains(CANCELAR)')){
        //             cy.get('.btn-cancelar').click()            
        //     } else {
        //         cy.get('.page-header-title').should('be.visible')
        //     }
        // })
        
        cy.verifica_dialog_contato_if()

        expect(cy.get('.username-wrapper > [fxhide=""]').contains('Olá, ABAETE')).to.exist
        
    })
    
    it('Acessa Conteúdo Livros Digitais', () =>{
        cy.testa_conteudo_livrodigital()
    })

    it('Acessa Conteúdo Atv. Complementares', () =>{
        cy.testa_projConteudo_atvComplementar()
    })

    // it('Acessa Conteúdo FAQ', () =>{
    //     cy.testa_conteudo_ajuda()
    // })

    // it('Acessar Conteúdo Conhecendo o Aprova', () =>{
    //     cy.testa_projConteudo_conhecendoAprova()
    // })

    
});