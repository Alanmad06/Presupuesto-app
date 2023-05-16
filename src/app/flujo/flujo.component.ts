import { Component ,OnInit} from '@angular/core';
import { flujoService } from '../flujo.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {

  ingresoTotal:number;
  egresoTotal:number;

  constructor(private flujoService:flujoService){
    this.flujoService.ingresoTotalEmit.subscribe(
      (ingresoTotalEmit:number)=>{
        this.ingresoTotal=ingresoTotalEmit
      }
    )
    this.flujoService.egresoTotalEmit.subscribe(
      (egresoTotalEmit:number)=>{
        this.egresoTotal=egresoTotalEmit
      }


    )
    
  }
  ngOnInit(): void {
     
      this.ingresoTotal=this.flujoService.cingresoTotal()
      this.egresoTotal=this.flujoService.cegresoTotal()
  }

}
