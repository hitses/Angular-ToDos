import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.scss']
})
export class ShowTodosComponent implements OnInit {
  @Input() data: Todo[];

  constructor() { }

  ngOnInit() {
    let newTodo: Todo = {
      id: Math.random() * 9999999,
      text: 'Primera tarea',
      completed: false,
      createdAt: new Date(),
    };

    this.data.push(newTodo);
  }

}
