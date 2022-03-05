import React from "react";
<reference types="cypress" />;

describe("Test Auth Module", () => {
  beforeEach(() => {
    cy.visit("https://partnerforsqa.dev.uniteliving.com/login");
  });
  it("Account create", () => {
    let email ='sohel@gain.io'
    let password='SQAengineer'
  cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type(`${email}`)
  cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type(`${password}`)
  cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
  cy.contains('Accounts').click({force:true});
  cy.contains('Actions').click()
  cy.get('.container > .dropdown > .dropdown-menu > :nth-child(1) > span').click()
  // Account Information(Mandatory fields)

  let name='anoy01'
  let mail='anoy10@mail.com'
  cy.get('.modal-body > :nth-child(2) > .form-control').type(`${name}`)
  cy.get('.modal-body > :nth-child(3) > .form-control').type(`${mail}`)
  cy.get('.form-field > .uninite-option-field > .form-control').click()
  cy.get('#js-filter-search').type('sohel')
  cy.get('.list-group-item > :nth-child(1)').click({multiple:true})
  cy.get('.modal-footer > .btn-primary').click()

});


});