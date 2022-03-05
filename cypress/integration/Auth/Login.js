import React from "react";
<reference types="cypress" />;

describe("Test Auth Module", () => {
  beforeEach(() => {
    cy.visit("https://partnerforsqa.dev.uniteliving.com/login");
  });
  it("Login with valid data", () => {
      let email ='sohel@gain.io'
      let password='SQAengineer'
    cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type(`${email}`)
    cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type(`${password}`)
    cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
    cy.get(':nth-child(4) > .logout').click({ force: true })
    cy.get('#sign-in-dropdown > .dropdown-toggle').click()
  });
  it("Login with Invalid data", () => {
    let email ='sohelaaa@gain.io'
    let password='SQaAengineer'
  cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type(`${email}`)
  cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type(`${password}`)
  cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
  cy.get(':nth-child(4) > .logout').click({ force: true })
  cy.get('#sign-in-dropdown > .dropdown-toggle').click()
  
  
});
  it("Blank Data", ()=>{
    cy.get('#sign-in-dropdown > .dropdown-toggle').click({ force: true })
    cy.get(':nth-child(3) > .btn').click({ multiple: true })
  })
  it("Login with facebook", ()=>{
    cy.get('.dtms-login-wrapper > .btn-social > .facebook-link-text').click({ force: true })
  })

  it("Forgot Password", ()=>{
    let resetMail='sohel@gain.io'
    cy.get('#partnerLoginForm > .text-center > a').click({force:true})
    cy.get('.dtms-login-wrapper > :nth-child(2) > form > .clearfix > .form-control').type(`${resetMail}`)
    cy.get('form > :nth-child(2) > .btn').click()
    
  })
});
