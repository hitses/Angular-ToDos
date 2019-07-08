import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  addNewTodo(text) {
    let newTodo: Todo = {
      id: Math.random() * 9999999,
      text,
      completed: false,
      createdAt: new Date(),
    }
    this.todos.push(newTodo);
  }
}
