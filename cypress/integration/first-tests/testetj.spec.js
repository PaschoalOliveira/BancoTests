describe('Meu primeiro teste', () =>{
    it('Testa se true é true ', () => {
        expect(true).to.equal(true);
    })
})


describe('Teste no site coelba', () =>{
    it('Verifica nova ligação coelba', () => {
        //Abre  o site especificado
        cy.visit('https://servicos.coelba.com.br/Pages/index.aspx')

        cy.contains('Todos os serviços').click()

        //Pegamos o span que contém o texto Nova Ligação e clicamos
        cy.get('span').contains('Nova Ligação').click()
        
        //Pegamos o elemento que termina com o texto txtCNPJ_CPF e digitamos 99999999
        cy.get('[id$=txtCNPJ_CPF]').type(9999999999)
        //Pegamos o elemento que termina com o texto ctl00_txtSenha e digitamos 99999999
        cy.get('[id$=ctl00_txtSenha]').type(999999999)

        //Pegamos o button que contém o texto Acessar e clicamos
        cy.get('button').contains('Acessar').click()
        
        //Verificamos se o elemento que termina com o id ltMsgError cotém o texto
        // Login ou senha incorreta.
        cy.get('[id$=ltMsgError]').should('have.text',' Login ou senha incorreta.')
    })
})