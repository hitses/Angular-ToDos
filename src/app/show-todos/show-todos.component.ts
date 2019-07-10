import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.scss']
})
export class ShowTodosComponent {
  @Input() data: Todo[];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() completeTodo = new EventEmitter<number>();
  @Output() changeColor = new EventEmitter<object>();

  emitDeleteId(id) {
    this.deleteTodo.emit(id);
  }

  emitCompleteId(id) {
    this.completeTodo.emit(id);
  }

  changeColorItem(color, id) {
    this.changeColor.emit( {color:color, id:id});
  }

  constructor() { }

}
