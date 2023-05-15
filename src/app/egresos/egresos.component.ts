import { Component, Input } from '@angular/core';
import { valor } from '../valor.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
  @Input()egreso:valor
  

}
