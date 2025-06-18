import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-galaxies',
  templateUrl: './galaxies.component.html',
  styleUrls: ['./galaxies.component.css']
})
export class GalaxiesComponent implements OnInit {
  galaxies: any[] = [];
  selectedImages: string[] = [];

  constructor(public nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getGalaxies().subscribe(data => {
      this.galaxies = data;
    });
  }

  showImages(galaxy: any): void {
    this.selectedImages = galaxy.links?.map((link: any) => link.href) || [];
  }
}
