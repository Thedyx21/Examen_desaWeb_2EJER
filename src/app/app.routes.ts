import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NasaImagesComponent } from './components/nasa-images/nasa-images.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nasa-images', component: NasaImagesComponent },
  { path: 'image-details/:id', component: ImageDetailsComponent },
  { path: '**', redirectTo: '' }
];