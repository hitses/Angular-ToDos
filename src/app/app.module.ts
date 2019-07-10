import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ShowTodosComponent } from './show-todos/show-todos.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormatDatePipe } from './format-date.pipe';
import { ColorPikerComponent } from './color-piker/color-piker.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddTodoComponent,
    ShowTodosComponent,
    FormatDatePipe,
    ColorPikerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
