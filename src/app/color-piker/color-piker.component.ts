import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-piker',
  templateUrl: './color-piker.component.html',
  styleUrls: ['./color-piker.component.scss']
})
export class ColorPikerComponent {
  @Output() changeColor = new EventEmitter<string>();
  @Input() color: string;
  constructor() { }

  emitChangeColor(c) {
    this.changeColor.emit(c);
  }
}
