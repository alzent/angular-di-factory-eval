import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: [],
  providers: [provideLoggingService()] // Provider wird durch eine Factory-Funktion bestimmt
})

export class AppComponent {

  // LoggingService wird injeziert
  constructor(private logging: LoggingService){
    logging.log('test log');
  }

  title = 'app works!';
}

export const LOGGING_USE_DATE = true;

export function provideLoggingService() {
  return {
    provide: LoggingService,
    useFactory: () => { 
      return new LoggingService(LOGGING_USE_DATE) 
    }
  }
}