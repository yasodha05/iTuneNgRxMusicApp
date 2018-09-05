import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router, RouterStateSnapshot} from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent implements OnInit {
  private previousUrl: string;
  private currentUrl: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute , private location :Location) {
    this. currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => console.log(data));
  }
  goBack() {
    this.location.back();
    /*console.log(this.previousUrl);*/
  }
}
