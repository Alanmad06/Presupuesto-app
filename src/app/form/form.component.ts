import { Component, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { valor } from '../valor.model';
import { flujoService } from '../flujo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  tipos:string ="ingreso"
  
  

  descripcion:string;
  valor:string;

  constructor(private flujoService: flujoService) {}

  agregarIngreso(tipo: HTMLSelectElement) {
   /* if (
      this.descripcion.length === 0 ||
      this.valor.length === 0
    ) {
    } else {Otra forma de acerlo con if comprobando que los datos no esten vacios
  pero con f.form.valid se comprueba que los campos no esten en nulos }*/
      let valoraux = new valor(
        this.descripcion,
        parseInt(this.valor)
      );
      if (tipo.value == 'ingreso') {
       
        this.flujoService.agregarIngreso(valoraux);
        this.flujoService.ingresoTotalEmit.emit(
          this.flujoService.cingresoTotal()
        );
      } else {
       
        valoraux.valor= -valoraux.valor
        this.flujoService.agregarEgreso(valoraux);
        this.flujoService.egresoTotalEmit.emit(
          this.flujoService.cegresoTotal()
        );
      }
    
  }

  tipoOperacion(evento){
    this.tipos= evento.target.value

  }
}
