import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user is on todolist", () => {
    cy.visit("/")
    cy.url().should("include", "unique-dieffenbachia-f6742a.netlify.app")
})

When("The user click on the task, the task will update its status", () => {
    cy.get("div[class='todo is-complete']")
      .last()
      .click()

    cy.contains("test 001 this is cypress")
      .click()
    
    cy.wait(3000)
})

Then("The user should see the line crossed the tasks or the line disappear", () => {
    cy.contains("Walk to the university")
      .should("not.have.class", "is-complete")

    cy.contains("test 001 this is cypress")
      .parent()
      .should("have.class", "is-complete")
})