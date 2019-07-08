import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ShowTodosComponent } from './show-todos/show-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddTodoComponent,
    ShowTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
