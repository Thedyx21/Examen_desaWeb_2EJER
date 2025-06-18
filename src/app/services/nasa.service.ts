import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  constructor(private http: HttpClient) {}

  getGalaxies() {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res) => res.collection.items)
    );
  }
}
