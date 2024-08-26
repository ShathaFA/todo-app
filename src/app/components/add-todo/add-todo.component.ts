import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddTodoComponent {
  todoForm: FormGroup;
  isSubmitted = false; // Track form submission status

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  addTodo() {
    this.isSubmitted = true; // Set to true when form is submitted
    if (this.todoForm.valid) {
      const text = this.todoForm.value.text;
      this.todoService.addTodo(text);
      console.log('Added todo with text:', text); // Verify the added todo
      this.todoForm.reset();
      this.router.navigate(['/todos']); // Navigate to the list route
    } else {
      console.log('Form is invalid'); // Optional: Add a console log for debugging
    }
  }
}
