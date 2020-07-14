import { Component } from '@angular/core';
import { LoggerService } from 'src/gfi-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(private log: LoggerService) {
    // log.error('Esto es un error');
    // log.warn('Esto es un warn');
    // log.info('Esto es un info');
    // log.log('Esto es un log');
  }
}
