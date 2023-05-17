import { Component, Input, OnInit } from '@angular/core';
import { flujoService } from '../flujo.service';
import { valor } from '../valor.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  @Input() ingreso: valor;
  ingresoTotal: number;

  constructor(private flujoService: flujoService) {
    this.flujoService.ingresoTotalEmit.subscribe((ingresoTotalEmit: number) => {
      this.ingresoTotal = ingresoTotalEmit;
    });
  }
  ngOnInit(): void {
    this.ingresoTotal = this.flujoService.cingresoTotal();
  }

  eliminarIngreso() {
    this.flujoService.eliminarIngreso(this.ingreso);
    this.flujoService.ingresoTotalEmit.emit(this.flujoService.cingresoTotal());
  }
}
