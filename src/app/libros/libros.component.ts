import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  listado: object = [];

  constructor(private http: HttpClient, private notify: NotificationService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4321/api/libros').subscribe(
      item => this.listado = item,
      err => this.notify.add(err.message)
    );
  }

}
