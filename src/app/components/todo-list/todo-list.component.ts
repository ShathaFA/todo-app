import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [TodoItemComponent, NgFor,CommonModule],
})
export class TodoListComponent {
  todos: { id: number; text: string; completed: boolean }[] = [];

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  toggleCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
    this.loadTodos();  // Reload todos after toggling
  }

  remove(id: number) {
    this.todoService.removeTodo(id);
    this.loadTodos();  // Reload todos after removing
  }
}

//an