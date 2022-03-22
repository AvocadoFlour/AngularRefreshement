import { Injectable } from '@angular/core';
import { Album } from './album';
import { ALBUMS } from './mock-albums';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumsUrl = 'api/albums'; // URL to web API

  constructor(private http: HttpClient,
    private notificationService: NotificationService) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Album[]>('getHeroes', []))
      );
  }

  getAlbum(id: Number): Observable<Album> {
    const album = ALBUMS.find(a => a.id ===id)!;
    this.log(`AlbumService: dohvatil sem albumček id=${id}`);
    return of(album);
  }

  private log(message: string) {
    this.notificationService.add(`AlbumService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the errror to the remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);

    }
  }

}