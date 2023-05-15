import { Component ,OnInit} from '@angular/core';
import { flujoService } from '../flujo.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {

  ingresoTotal:number;

  constructor(private flujoService:flujoService){
    this.flujoService.ingresoTotalEmit.subscribe(
      (ingresoTotalEmit:number)=>{
        this.ingresoTotal=ingresoTotalEmit
      }
    )
    
  }
  ngOnInit(): void {
      this.flujoService.cingresoTotal()
      this.ingresoTotal=this.flujoService.cingresoTotal()
  }

}
