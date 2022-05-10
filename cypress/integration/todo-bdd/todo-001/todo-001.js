import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user is on todolist", () => {
    cy.visit("/")
    cy.url().should("include", "unique-dieffenbachia-f6742a.netlify.app")
})

When("The user click add button and input tasks", () => {
    cy.wait(8000)
    cy.get("div[class='addPopup']")
      .click()

    cy.get("input[class='add-todo-input']")
      .type("test 001 this is cypress")

    cy.get("button").contains("Create Task")
      .click()
    cy.wait(3000)
})

Then("The user should see the added task on the taskboard", () => {
    cy.contains("test 001 this is cypress")
      .should("exist")
})