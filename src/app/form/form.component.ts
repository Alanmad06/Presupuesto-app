import { Component, ElementRef, ViewChild , EventEmitter } from '@angular/core';
import { valor } from '../valor.model';
import { flujoService } from '../flujo.service';
import { FlujoComponent } from '../flujo/flujo.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('descripcion') descripcion: ElementRef;
  @ViewChild('valor') valor: ElementRef;

  constructor(private flujoService: flujoService) {}

  

  agregarIngreso(tipo: HTMLSelectElement) {
    let valoraux = new valor(this.descripcion.nativeElement.value,parseInt(this.valor.nativeElement.value));
    if(tipo.value =="ing"){
      this.flujoService.agregarIngreso(valoraux);
      this.flujoService.ingresoTotalEmit.emit(this.flujoService.cingresoTotal())
    }
    else{
      this.flujoService.agregarEgreso(valoraux);
      this.flujoService.egresoTotalEmit.emit(this.flujoService.cegresoTotal())
    }

    
    
    
    

  }
}
