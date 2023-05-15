import { Component, OnInit } from '@angular/core';
import { valor } from './valor.model';
import { flujoService } from './flujo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'presupuesto-app';
  ingresos:valor[]=[]
  egresos:valor[]=[]

  constructor(private flujoService:flujoService){
    
  }
  ngOnInit(): void {
    this.ingresos=this.flujoService.ingresos 
    this.egresos=this.flujoService.egresos
  }
  
}
