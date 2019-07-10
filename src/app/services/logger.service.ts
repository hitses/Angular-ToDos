import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  debug = true;
  toggleDebug() {
    this.debug = !this.debug;
  }
  log(...args) {
    if (this.debug) {
      console.log(...args);
    }
  }
  error(...args) {
    console.log(...args);
  }
  warn(...args) {
    console.log(...args);
  }
}
