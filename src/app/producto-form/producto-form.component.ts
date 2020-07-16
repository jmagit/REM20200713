import { Component, OnInit } from '@angular/core';

export class Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  elemento: Producto = new Producto();

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.elemento = {id: 1, nombre: 'Patatas', descripcion: 'Saco de 5kg de patatas', precio: 2 };
  }

  send() {
    alert(`${this.elemento.id} ${this.elemento.nombre} ${this.elemento.descripcion} ${this.elemento.precio} `);
  }
  cancel() {
    this.elemento = new Producto();
  }
}
