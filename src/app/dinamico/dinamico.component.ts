import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../main/home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { ProductoFormComponent } from '../producto-form/producto-form.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { LibrosComponent } from '../libros/libros.component';
import { PersonasComponent } from '../personas';
import { BlogComponent } from '../blog';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
//  entryComponents: [ HomeComponent, DemosComponent, ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Personas', componente: PersonasComponent},
    { texto: 'Blog', componente: BlogComponent},
    { texto: 'Inicio', componente: HomeComponent},
    { texto: 'Demos', componente: DemosComponent},
    { texto: 'Formulario', componente: ProductoFormComponent},
    { texto: 'Calculadora', componente: CalculadoraComponent},
    { texto: 'Libros', componente: LibrosComponent},
  ];
  actual = this.menu[0].componente;

  constructor() { }

  public selecionar(index: number): void {
    this.actual = this.menu[index].componente;
  }

  ngOnInit(): void {
  }

}
