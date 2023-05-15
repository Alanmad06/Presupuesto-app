import { Component, Input, OnInit } from '@angular/core';
import { flujoService } from '../flujo.service';
import { valor } from '../valor.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  
  @Input()ingreso:valor
  

  constructor(private flujoService:flujoService){
    
  }
  ngOnInit(): void {
    
  }

 

}
