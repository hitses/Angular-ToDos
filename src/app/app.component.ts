import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

  addNewTodo(text) {
    const newTodo: Todo = {
      id: Math.round(Math.random() * 9999999),
      text,
      completed: false,
      createdAt: new Date(),
    };

    this.todos.push(newTodo);
    this.saveToLocalStorage();
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleCompleted(id) {
    this.todos = this.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.saveToLocalStorage();
  }
}
