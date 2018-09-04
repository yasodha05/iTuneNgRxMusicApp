import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MusicDetailComponent } from './music/component/music-detail/music-detail.component';
import { MusicListComponent } from './music/component/music-list/music-list.component';
import { SearchComponent } from './music/component/search/search.component';
import { MusicShellComponent } from './music/container/music-shell/music-shell.component';
import { MyFavComponent } from './music/container/my-fav/my-fav.component';
import { MusicSearchComponent } from './music/services/music-search/music-search.component';

import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MusicService} from './music/music.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthguardService} from './auth/auth/authguard.service';

const routes = [
  {
    path: 'music',
    canActivate: [AuthguardService ],
    loadChildren: './music/music.module#MusicModule'
  },
  {path: 'login', component: LoginComponent},
   // {
   //   path: 'fav',
   //  component: MyFavComponent
   // }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
