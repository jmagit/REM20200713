import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable;

  nombre = 'mundo';
  listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'BARCELONA' },
    { id: 3, nombre: 'bilbao' },
    { id: 4, nombre: 'ValenciA' },
  ];
  idProvincia = 2;

  resultado: string = null;
  visible = true;
  estetica = { importante: true, error: false, urgente: true };

  fontsize = 24;

  constructor(public vm: NotificationService) { }

  public get Nombre(): string {
    return this.nombre;
  }
  public set Nombre(valor: string) {
    if (this.nombre !== valor) {
      if (this.nombre?.length < 3) {
        this.vm.add("nombre corto");
        return;
      }
      this.nombre = valor;
    }
  }
  saluda() {
    this.resultado = `Hola ${this.Nombre}`;
    this.Nombre = 'algo';
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    const id = this.listado.length > 0 ?
      (this.listado[this.listado.length - 1].id + 1) : 1;
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  ngOnInit(): void {
    // this.suscriptor = this.vm.Notificacion.subscribe(n => {
    //   if (n.Type !== NotificationType.error) { return; }
    //   window.alert(`Suscripcion: ${n.Message}`);
    //   // this.vm.remove(this.vm.Listado.length - 1);
    // });
  }

  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

}
