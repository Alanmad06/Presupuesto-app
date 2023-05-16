import { EventEmitter } from "@angular/core";
import { valor } from "./valor.model";

export class flujoService {

    ingresos:valor[]= [new valor("Salario",2100.00), new valor("Venta Coche",1900.00),new valor("aa",600)]
    egresos:valor[]= [new valor("Renta",900.00), new valor("Ropa",200.58)]
    

    ingresoTotalEmit= new EventEmitter<number>()
    egresoTotalEmit= new EventEmitter<number>()

    cingresoTotal():number{
       let ingresoTotal=0
        for (let index = 0; index < this.ingresos.length; index++) {
            ingresoTotal+=this.ingresos[index].valor
        }
   return ingresoTotal
    }
    cegresoTotal():number{
        let egresoTotal=0
         for (let index = 0; index < this.egresos.length; index++) {
             egresoTotal+=this.egresos[index].valor
         }
    return egresoTotal
     }
     

    agregarIngreso(valor:valor){
        this.ingresos.push(valor)
    }
    agregarEgreso(valor:valor){
        this.egresos.push(valor)
    }

eliminarIngreso(valor:valor){
    for (let index = 0; index < this.ingresos.length; index++) {
        if(this.ingresos[index].descripcion==valor.descripcion && this.ingresos[index].valor==valor.valor){
            this.ingresos.splice(index,1)
        }
    }
    
}
eliminarEgreso(valor:valor){
    for (let index = 0; index < this.egresos.length; index++) {
        if(this.egresos[index].descripcion==valor.descripcion && this.egresos[index].valor==valor.valor){
            this.egresos.splice(index,1)
        }
    }
    
}
    
}