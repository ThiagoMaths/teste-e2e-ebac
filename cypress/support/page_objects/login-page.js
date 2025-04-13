class loginPage {
    acessoLogin() {
        cy.get('.showlogin').click()
        cy.fixture('perfil.json').then(dadosLogin => {
            cy.get('#username').type(dadosLogin.usuario)
            cy.get('#password').type(dadosLogin.senha)
            cy.get('.woocommerce-button').click()

        })

    }
}

export default new loginPage()