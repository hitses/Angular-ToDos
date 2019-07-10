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
      color: 'white',
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

  changeColor(ev: {id: number, color: string}) {
    this.todos = this.todos.map( todo => {
      if (todo.id === ev.id) {
        todo.color = ev.color;
      }
      return todo;
    });
    this.saveToLocalStorage();
  }
}
