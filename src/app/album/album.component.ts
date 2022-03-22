import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[] = [];

  selectedAlbum?: Album;

  constructor(private albumService: AlbumService, 
    private notificationService: NotificationService) 
  { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
    .subscribe(albums => this.albums = albums);
  }

}
