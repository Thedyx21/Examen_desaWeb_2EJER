import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images: string[] = [
    'https://www.nasa.gov/sites/default/files/thumbnails/image/potw2024a.jpg',
    'https://www.nasa.gov/sites/default/files/thumbnails/image/ngc346.jpg',
    'https://www.nasa.gov/sites/default/files/thumbnails/image/heic1525a.jpg'
  ];
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
