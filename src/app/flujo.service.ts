import { EventEmitter } from "@angular/core";
import { valor } from "./valor.model";

export class flujoService {

    ingresos:valor[]= [new valor("Salario",2100.00), new valor("Venta Coche",1900.00),new valor("aa",600)]
    egresos:valor[]= [new valor("Renta",900.00), new valor("Ropa",200.00)]
    

    ingresoTotalEmit= new EventEmitter<number>()

    cingresoTotal():number{
       let ingresoTotal=0
        for (let index = 0; index < this.ingresos.length; index++) {
            ingresoTotal+=this.ingresos[index].valor
        }
   return ingresoTotal
    }

    agregarIngreso(valor:valor){
        this.ingresos.push(valor)
    }
    agregarEgreso(valor:valor){
        this.egresos.push(valor)
    }

    
}