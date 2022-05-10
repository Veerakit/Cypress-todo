Feature: Add Todo List Test
  To add task to be attached on the taskboard 
  As a user
  I need to visit the todo-list
    Scenario: User input tasks in the provided form
    Given The user is on todolist
    When The user click add button and input tasks
    Then The user should see the added task on the taskboard