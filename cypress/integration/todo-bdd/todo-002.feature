Feature: Update Todo List Test
  To update status of tasks on the taskboard 
  As a user
  I need to visit the todo-list
    Scenario: User want to cross or uncross tasks
    Given The user is on todolist
    When The user click on the task, the task will update its status
    Then The user should see the line crossed the tasks or the line disappear