import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ɵALLOW_MULTIPLE_PLATFORMS} from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit, OnChanges {
  @Input() music;
  @Input() errorMessage: string;
  @Input() selectedMusic: any;
  @Output() selected = new EventEmitter<any>();
  s = 0;
  e = 10;
  total = 0;
  numbers = [];
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
    this.total = this.music.length / 10;
    console.log('total', this.total);
    this.numbers = Array(this.total).fill(0).map((x, i ) => i);
  }
  musicSelected(m) {
  this.selected.emit(m);
  }
  pageNum(start: number){
    this.s = start * 10 ;
    this.e = this.s + 10;
  }

}
