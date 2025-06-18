import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalaxiesComponent } from './pages/galaxies/galaxies.component';
import { CarruselComponent } from './pages/carrusel/carrusel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galaxias', component: GalaxiesComponent },
  { path: 'carrusel', component: CarruselComponent },
];