import cy from 'cypress'

describe('test text, toppings, and submit', () => {
    it('validate text input', ()=> {
        cy.visit('http://localhost:3000/pizza')

        cy.get('input[name=name]')
        .type('Mario')
        .should('have.value', 'Mario')
    })
    it('select 2 toppings', ()=> {
        cy.get('input[name=goomba]')
        .click()
        .should('have.value', 'on')
        cy.get('input[name=koopa]')
        .click()
        .should('have.value', 'on')
    })
    it('submit', () => {
        cy.get('button')
        .click()
    })
})

