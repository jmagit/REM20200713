import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/gfi-core';
import { NotificationService } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private notify: NotificationService) { }

  ngOnInit(): void {
    // this.notify.add('Error al entrar');
  }
  // constructor(private log: LoggerService) {
  //   // log.error('Esto es un error');
  //   // log.warn('Esto es un warn');
  //   // log.info('Esto es un info');
  //   // log.log('Esto es un log');
  // }
}
