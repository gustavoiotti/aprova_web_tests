describe('Teste cases de login invalido', () =>{

    it('Logar com Usuário e Senha incorretos', () =>{
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
        //cy.viewport(1366, 768)
        cy.get('.btn').click()
        cy.get('#mat-input-0').type('dema1')
        cy.get('#mat-input-1').type('dea1')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        cy.get('.submit-button').click()

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(400);
        })
        // VERIFICA MENSAGEM DE ERRO
        if (cy.get('.mat-simple-snackbar').contains('Usuário ou senha digitados não coincidem com um usuário válido. Se você é ALUNO, por favor refaça seu acesso no Moderna Edu: modernaedu.com.br, esta é a plataforma certa para você.')) {
            // CONFIRMA MSG DE ERRO -> CLICA BOTÃO 'OK'
            cy.get('.ng-tns-c25-8 > .mat-button-wrapper').click()    
        }
        
    })

    it('Logar com Usuário vazio e Senha incorreta', () =>{
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
        //cy.viewport(1366, 768)
        cy.get('.btn').click()
        cy.get('#mat-input-0').should('have.value', '')
        cy.get('#mat-input-1').type('dea1')
        cy.get('.submit-button').should('be.disabled')
    })

    it('Logar com Usuário e Senha vazios', () =>{
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
        //cy.viewport(1366, 768)
        cy.get('.btn').click()
        cy.get('#mat-input-0').should('have.value', '')
        cy.get('#mat-input-1').should('have.value', '')
        cy.get('.submit-button').should('be.disabled')
    })

        it('Logar com Usuário incorreto e Senha correta', () =>{
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
        //cy.viewport(1366, 768)
        cy.get('.btn').click()
        cy.get('#mat-input-0').type('demo')
        cy.get('#mat-input-1').type('deo1')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        cy.get('.submit-button').click()

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(400);
        // VERIFICA MENSAGEM DE ERRO
        if (cy.get('.mat-simple-snackbar').contains('Usuário ou senha digitados não coincidem com um usuário válido. Se você é ALUNO, por favor refaça seu acesso no Moderna Edu: modernaedu.com.br, esta é a plataforma certa para você.')) {
            // CONFIRMA MSG DE ERRO -> CLICA BOTÃO 'OK'
            cy.get('.ng-tns-c25-8 > .mat-button-wrapper').click()    
        }
        
    })

    it('Logar com Usuário correto e Senha incorreta', () =>{
        cy.visit('http://aprovabrasil-hmg.azurewebsites.net')
        //cy.viewport(1366, 768)
        cy.get('.btn').click()
        cy.get('#mat-input-0').type('demo1')
        cy.get('#mat-input-1').type('dea1')
        cy.server();
        cy.route('POST', '**/api/v1/usuarios/login').as('postV1');

        cy.get('.submit-button').click()

        cy.wait('@postV1').then((xhr) =>{
            expect(xhr.status).be.eq(400);
        })
        // VERIFICA MENSAGEM DE ERRO
        if (cy.get('.mat-simple-snackbar').contains('Usuário ou senha digitados não coincidem com um usuário válido. Se você é ALUNO, por favor refaça seu acesso no Moderna Edu: modernaedu.com.br, esta é a plataforma certa para você.')) {
            // CONFIRMA MSG DE ERRO -> CLICA BOTÃO 'OK'
            cy.get('.ng-tns-c25-8 > .mat-button-wrapper').click()    
        }
        
        })
    
    })
})