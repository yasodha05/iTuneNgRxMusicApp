import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
back(){
    this.location.back();
}
}
