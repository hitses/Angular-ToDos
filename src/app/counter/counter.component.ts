import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = Math.round(Math.random() * 100);
  constructor() { }

  ngOnInit() {
  }

  increment() {
    return this.count++;
  }
  
  decrement() {
    return this.count--;
  }

}
