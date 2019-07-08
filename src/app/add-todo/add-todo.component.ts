import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  addNewTodo: string;
  @Output() newTodo = new EventEmitter<string>();

  constructor() { }

  newTask() {
    this.newTodo.emit(this.addNewTodo);
    this.addNewTodo = '';
  }

  ngOnInit() {
  }


}
