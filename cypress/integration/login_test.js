/// <refrence types="cypress" />  

//conventional way
it('login test', ()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test') // both object and action are used together
    cy.get('#pwd').type('test')  // object being .get('#pwd')
    cy.get('[type="submit"]').click() //action being .click() or .type()
})

// This script was rewritten in page object model inside the Pageobject folder