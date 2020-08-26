import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

// import {muisc} from '../../assets'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  sound: any = null;
  songs: any = ['Digital Lemonade.mp3', 'Dream Catcher.mp3', 'EDM Detection Mode.mp3', 'Inspired.mp3',
    'Jerry Five.mp3', 'Laser Groove.mp3', 'Secrets of the Schoolyard.mp3', 'The Lift.mp3',
    'Voice Over Under.mp3', 'voltaic.mp3', 'What Is Love.mp3'];
  index: number = 0;
  show: boolean = true;
  constructor() {
  }

  ngOnInit() {
    if (this.sound === null) {
      this.sound = new Howl({
        src: ['../../assets/music/' + this.songs[7]],
        html5: true
      });
    }
  }

  playMusic() {
    if (this.sound === null) {
       this.sound = new Howl({
        src: ['../../assets/music/' + this.songs[7]],
        html5: true
      });
    }
    this.pauseMusic();
    this.sound.play();
    console.log(this.sound);
    this.show = false;
  }

  pauseMusic() {
    this.sound.pause();
    this.show = true;
  }

  forwardMusic() {
    this.pauseMusic();
    this.show = false;
    this.sound = new Howl({
      src: ['../../assets/music/' + this.songs[this.index]],
      html5: true
    });

    if (this.index < this.songs.length - 1) {
      this.index = this.index + 1;
      console.log('Index: ', this.index);
    } else {
      this.index = 0;
    }

    console.log('Playing: ', this.songs[this.index]);
    this.sound.play();
  }

  backwardsMusic() {
    this.pauseMusic();
    this.show = false;
    this.sound = new Howl({
      src: ['../../assets/music/' + this.songs[this.index]],
      html5: true
    });

    if (this.index !== 0) {
      this.index = this.index - 1;
      console.log('Index: ', this.index);
    } else {
      this.index = this.songs.length - 1;
    }

    console.log('Playing: ', this.songs[this.index]);
    this.sound.play();
  }
}
