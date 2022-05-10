import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user is on todolist", () => {
    cy.visit("/")
    cy.url().should("include", "unique-dieffenbachia-f6742a.netlify.app")
})

When("The user click on a delete button on the selected task", () => {
    cy.contains("Walk to the university")
      .click()
    cy.wait(3000)

    cy.get("div[class='todo is-complete']")
      .last()
      .children("div[class='delete-todo']")
      .click()
    cy.wait(3000)
})

Then("The selected task should be disappear", () => {
    cy.contains("test 001 this is cypress")
      .should("not.exist")
})