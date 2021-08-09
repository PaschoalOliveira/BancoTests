describe('Teste em Empregados', () =>{
    it('Teste se determinado empregado existe', ()=>{
        cy.visit('http://127.0.0.1:5500/htmls/index.html');
        cy.get("#login").type(9999999)
        cy.get("#password").type(9999999)
        cy.get("#submit").click()
    })
})