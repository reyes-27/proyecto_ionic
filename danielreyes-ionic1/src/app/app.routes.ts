import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'circulo',
    loadComponent: () => import('./circulo/circulo.component').then((m) => m.CirculoComponent),
  },
  {
    path: 'circulo/',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'triangulo-escaleno',
    loadComponent: () => import('./triangulo-escaleno/triangulo-escaleno.component').then((m) => m.TrianguloEscalenoComponent),
  },
  {
    path: 'triangulo-escaleno/',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'triangulo-equilatero',
    loadComponent: () => import('./triangulo-equilatero/triangulo-equilatero.component').then((m) => m.TrianguloEquilateroComponent),
  },
  {
    path: 'triangulo-equilatero/',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
