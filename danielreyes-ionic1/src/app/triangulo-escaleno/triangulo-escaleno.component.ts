import { Component, OnInit } from '@angular/core';
import { FiguraGeometrica } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  imports:[IonicModule, CommonModule, FormsModule],
  standalone:true,
})

export class TrianguloEscalenoComponent implements OnInit{

  constructor(){

  }
  txtLadoA = ""
  txtLadoB = ""
  txtLadoC = ""
  perimetro = 0
  triangulo = new TrianguloEscaleno("Triangulo",0, 0 ,0)
  mostrarResultado: boolean = false; 

  calcularP(){
    this.triangulo.ladoA = parseInt(this.txtLadoA)
    this.triangulo.ladoB = parseInt(this.txtLadoB)
    this.triangulo.ladoC = parseInt(this.txtLadoC)
    this.perimetro = this.triangulo.calcularPerimetro()
  }

  PerimetroValido(){
    this.mostrarResultado = true;
    return !isNaN(this.perimetro)
  }
  ngOnInit(): void {

  }
}

export class TrianguloEscaleno extends FiguraGeometrica{

  ladoA:number;
  ladoB:number;
  ladoC:number;

  constructor(nombre:string, ladoA:number, ladoB:number, ladoC:number) { 
    super(nombre);
    this.ladoA = ladoA
    this.ladoB = ladoB
    this.ladoC = ladoC
  }

  override calcularPerimetro(): number {
      let p = this.ladoA+this.ladoB+this.ladoC
      return p
  }



}


