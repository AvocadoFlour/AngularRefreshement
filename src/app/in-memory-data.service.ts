import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const albums = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {albums};
  }

  // Overrides the genId method to ensure that a album always has an id.
  // If the album array is empty,
  // the method below returns the initial number (11).
  // if the album array is not empty, the method below returns the highest
  // album id + 1.
  genId(albums: Album[]): number {
    return albums.length > 0 ? Math.max(...albums.map(album => album.id)) + 1 : 11;
  }
}