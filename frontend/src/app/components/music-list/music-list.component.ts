import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Music } from '../../models/music/music';
import { MusicService } from '../../services/music/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})



export class MusicListComponent implements OnInit {

  music_list? : Music[] = [];
  private musicListSubscription: Subscription = new Subscription();

  constructor(private music_service: MusicService) { }

  ngOnInit(): void {
    this.music_service.getMusic();
    this.musicListSubscription = this.music_service.current_music_list$
    .subscribe(musicList => this.music_list = musicList);
  }

  ngOnDestroy() : void {
    this.musicListSubscription.unsubscribe();
  }


}
