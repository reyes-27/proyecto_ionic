import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloEscalenoComponent } from '../triangulo-escaleno/triangulo-escaleno.component';
import { TrianguloEquilateroComponent } from '../triangulo-equilatero/triangulo-equilatero.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    CirculoComponent,
    TrianguloEscalenoComponent,
    TrianguloEquilateroComponent,
  
  ],
})
export class HomePage {
  figuraSeleccionada = ""
  constructor() {}
  ngOnInit() {

  }
}


