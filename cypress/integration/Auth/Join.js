import React from "react";
<reference types="cypress" />;

describe("Test Auth Module", () => {
  beforeEach(() => {
    cy.visit("https://partnerforsqa.dev.uniteliving.com");
  });
  it("Join with Email with valid data", () => {
      
      let name ='abcd';
      let email='abcd@mail.com'
      let password ='anoy123'
      let cpassword='anoy123'
    cy.get('#sign-up-dropdown > .dropdown-toggle').click({force:true});
    cy.get('#register-email-form > .btn-social').click({force:true});
    cy.get('#name').type(`${name}`)
    cy.get('#email').type(`${email}`)
    cy.get('#password').type(`${password}`)
    cy.get('#confirm_password').type(`${cpassword}`)
    cy.get('.checkmark').click({force:true});
    cy.get(':nth-child(6) > .btn').click({force:true});
    cy.get(':nth-child(1) > [data-v-0ff58b9e=""] > :nth-child(1) > div > .btn').click({force:true})
    
    
  
  });

  it("email validation", () => {
      
   
    let email='abcd#mail.com'
   
  cy.get('#sign-up-dropdown > .dropdown-toggle').click({force:true});
  cy.get('#register-email-form > .btn-social').click({force:true});
  cy.get('#email').type(`${email}`)
  cy.get('.checkmark').click({force:true});
  cy.get(':nth-child(6) > .btn').click({force:true});
  cy.get(':nth-child(1) > [data-v-0ff58b9e=""] > :nth-child(1) > div > .btn').click({force:true})
  

});
it("Blank validation", () => {
      
   
   
  cy.get('#sign-up-dropdown > .dropdown-toggle').click({force:true});
  cy.get('#register-email-form > .btn-social').click({force:true});
  
  cy.get('.checkmark').click({force:true});
  cy.get(':nth-child(6) > .btn').click({force:true});
 
  
  // https://github.com/NoobsZone/SQA-Assessment.git

});
  
});