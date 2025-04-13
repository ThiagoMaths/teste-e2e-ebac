class carrinhoPage {
    acessoCarrinho() {
        cy.get('.dropdown-toggle > .text-skin')
        cy.get('.woocommerce-message > .button').click()
    }

    acessoCheckout(){
        cy.get('.checkout-button').click()

    }

}

export default new carrinhoPage()
