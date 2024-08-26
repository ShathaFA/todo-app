import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' } //default
];
