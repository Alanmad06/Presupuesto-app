import { Component, Input ,OnInit } from '@angular/core';
import { valor } from '../valor.model';
import { flujoService } from '../flujo.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit{
  @Input()egreso:valor
  ingresoTotal:number
  
  constructor(private flujoService:flujoService){
    
    this.flujoService.ingresoTotalEmit.subscribe(
      (ingresoTotalEmit:number)=>{
        this.ingresoTotal=ingresoTotalEmit
      }
    )
  }
  ngOnInit(): void {
      this.ingresoTotal=this.flujoService.cingresoTotal()
  }

  eliminarEgreso(){
    this.flujoService.eliminarEgreso(this.egreso)
    this.flujoService.egresoTotalEmit.emit(this.flujoService.cegresoTotal())
  }
}
