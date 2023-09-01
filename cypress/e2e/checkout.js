///<reference types= "cypress" />

describe('add items to cart', () => {
    it('login and add items to cart', () => {

        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#loginFrm_loginname').type("Wasfy97")
        cy.get('#loginFrm_password').type("Wasfy_123456")
        cy.get('#loginFrm > fieldset > .btn').click()
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click()
        cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('.cart').click()
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()
        cy.get(':nth-child(4) > .thumbnail > :nth-child(1) > img').click()
        cy.get('#product_quantity').clear()
        cy.get('#product_quantity').type("2")
        cy.get('.cart').click()
        cy.get('.nav-pills > :nth-child(3)').click()
        cy.get(':nth-child(4) > :nth-child(1) > img').click()
        cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click()
        cy.get('.cart').click()
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('.maintext').should('include.text', 'Your Order Has Been Processed!')
          






        
        
    });
});