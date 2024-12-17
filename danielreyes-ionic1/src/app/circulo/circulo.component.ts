import { Component, OnInit } from '@angular/core';
import { FiguraGeometrica } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule, FormsModule]
})

export class CirculoComponent implements OnInit{

  constructor() { 

  }
  txtRadio = ""
  perimetro = 0
  circulo = new Circulo("Circulo", 0)
  mostrarResultado: boolean = false; 


  calcularP(){
    this.circulo.radio=parseInt(this.txtRadio)
    this.perimetro = this.circulo.calcularPerimetro()
  }
  PerimetroValido(){
    this.mostrarResultado = true;
    return !isNaN(this.perimetro)
  }
  ngOnInit(): void {
      
  }

}

export class Circulo extends FiguraGeometrica{
  radio:number;
  constructor(nombre:string, radio:number) { 
    super(nombre);
    this.radio=radio;

  }

  override calcularPerimetro():number {
    let p = 2 * Math.PI * this.radio;
    return p;
  }


}


