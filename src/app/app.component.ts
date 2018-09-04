import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromMusic from './music/store/reducer';
import {takeWhile} from 'rxjs/operators';
import {CountService} from './music/services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'iTunesNgRx';
  c = 0;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }



  constructor(private router: Router,
              private authService: AuthService, private countService: CountService) { }

 ngOnInit() {
    this.c = this.countService.getCount();
    console.log('count: ', this.c);
 }
  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
