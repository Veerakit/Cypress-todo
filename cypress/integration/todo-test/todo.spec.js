/// <reference types="cypress" />


describe("Test todo list CRUD", () => {

    
    beforeEach(() => {
        cy.visit("/")
        cy.url().should("include", "unique-dieffenbachia-f6742a.netlify.app")
    })

    it("User can add more task", () => {
        //click + button and input task and press create task button
        cy.wait(8000)
        cy.get("div[class='addPopup']").click()
        
        cy.get("input[class='add-todo-input']")
          .type("test 001 this is cypress")

        cy.get("button").contains("Create Task").click()
        cy.wait(3000)
    })

    it("User can update status of task", () => {
        cy.get("div[class='todo is-complete']").last().click()
        cy.wait(3000)
        cy.contains("Walk to the university").should("not.have.class", "is-complete")
        cy.contains("Walk to the university").click()
        cy.contains("test 001 this is cypress").click()
        cy.wait(3000)
        cy.contains("test 001 this is cypress").parent().should("have.class", "is-complete")
    })

    it("User can delete task", () => {
        cy.get("div[class='todo is-complete']").last().children("div[class='delete-todo']").click()
        cy.contains("test 001 this is cypress").should("not.exist")
        cy.wait(3000)
    })
})