import { Component, OnInit } from '@angular/core';
import { TrianguloEscaleno } from '../triangulo-escaleno/triangulo-escaleno.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
    imports:[IonicModule, CommonModule, FormsModule],
    standalone:true,
})
export class TrianguloEquilateroComponent  implements OnInit {
  txtLadoA=""
  perimetro=0
  
  constructor() { }
  triangulo = new TrianguloEquilatero("triangulo",0)
  
  mostrarResultado: boolean = false; 

  calcularP(){
    this.triangulo.ladoA = parseInt(this.txtLadoA)
    this.perimetro = this.triangulo.calcularPerimetro()
  }

  PerimetroValido(){
    this.mostrarResultado = true;
    return !isNaN(this.perimetro)
  }
  ngOnInit() {}

}

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(nombre:string, ladoA: number) {
    super(nombre, ladoA, ladoA, ladoA);
  }


  override calcularPerimetro(): number {
    return 3 * this.ladoA;
  }
}