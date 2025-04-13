class checkoutPage {

    validarLogin(){
        cy.get('#place_order').should('exist')

    }

}


export default new checkoutPage()
