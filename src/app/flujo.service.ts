import { EventEmitter } from '@angular/core';
import { valor } from './valor.model';

export class flujoService {
  ingresos: valor[] = [
    new valor('Salario', 2100.0),
    new valor('Venta Coche', 1900.0),
    new valor('aa', 600),
  ];
  egresos: valor[] = [new valor('Renta', -900.0), new valor('Ropa', -200.58)];

  ingresoTotalEmit = new EventEmitter<number>();
  egresoTotalEmit = new EventEmitter<number>();

  cingresoTotal(): number {
    let ingresoTotal = 0;
    /*for (let index = 0; index < this.ingresos.length; index++) {
      ingresoTotal += this.ingresos[index].valor;
    }*/
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    //Otra manera de hacerlo con el ciclo for each y una arrow function
    return ingresoTotal;
  }
  cegresoTotal(): number {
    let egresoTotal = 0;
    for (let index = 0; index < this.egresos.length; index++) {
      egresoTotal += this.egresos[index].valor;
    }
    return egresoTotal;
  }

  agregarIngreso(valor: valor) {
    this.ingresos.push(valor);
  }
  agregarEgreso(valor: valor) {
    this.egresos.push(valor);
  }

  eliminarIngreso(valor: valor) {
    let i: number = this.ingresos.indexOf(valor);
    this.ingresos.splice(i, 1);
    /*
    for (let index = 0; index < this.ingresos.length; index++) {
      if (
        this.ingresos[index].descripcion == valor.descripcion &&
        this.ingresos[index].valor == valor.valor
      ) {
        this.ingresos.splice(index, 1);
      }
    }*/
  }
  eliminarEgreso(valor: valor) {
    for (let index = 0; index < this.egresos.length; index++) {
      if (
        this.egresos[index].descripcion == valor.descripcion &&
        this.egresos[index].valor == valor.valor
      ) {
        this.egresos.splice(index, 1);
      }
    }
  }
}
