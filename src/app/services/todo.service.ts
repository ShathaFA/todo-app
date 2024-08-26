import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// The providedIn property in Angular's @Injectable decorator specifies where a service 
// should be provided (i.e., made available) within the application. When you mark a service with providedIn: 'root', it means that the service is provided at the root level of the application,
//  making it a singleton service. This service will be available throughout the entire application.
export class TodoService {
  private todos: { id: number, text: string, completed: boolean }[] = [];


  getTodos() {
    console.log('Getting todos:', this.todos); // Log todos when retrieved
    return this.todos;
  }

  addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false };
    this.todos.push(newTodo);
    console.log('Added todo:', newTodo); // Log the added todo

  }
  
  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      console.log('Toggled todo:', todo); // Log the toggled todo
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log('Removed todo with id:', id); // Log removal
  }
}
