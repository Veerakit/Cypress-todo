Feature: Delete Todo List Test
  To delete a selected tasks on the taskboard 
  As a user
  I need to visit the todo-list
    Scenario: User would like to delete the task
    Given The user is on todolist
    When The user click on a delete button on the selected task
    Then The selected task should be disappear