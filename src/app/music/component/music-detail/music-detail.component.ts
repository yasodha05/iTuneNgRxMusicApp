import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() selectedMusic: any;
  @Output() fav = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addFav(data){
    this.fav.emit(data);

  }

}
