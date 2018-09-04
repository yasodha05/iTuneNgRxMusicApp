import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromMusic from './music/store/reducer';
import {takeWhile} from 'rxjs/operators';
import * as fromRoot from './state/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'iTunesNgRx';
 val$: Observable<number> ;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }



  constructor(private router: Router,
              private authService: AuthService, private store: Store<fromRoot.State>) { }

 ngOnInit() {
   this.val$ = this.store.pipe(select(fromMusic.getCount));
 }
  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
