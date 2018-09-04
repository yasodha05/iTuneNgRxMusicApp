import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavComponent } from './container/my-fav/my-fav.component';
import { MusicShellComponent } from './container/music-shell/music-shell.component';
import { SearchComponent } from './component/search/search.component';
import { MusicListComponent } from './component/music-list/music-list.component';
import { MusicDetailComponent } from './component/music-detail/music-detail.component';
import { MusicSearchComponent } from './services/music-search/music-search.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MusicEffects} from './store/music.effects';
import { reducer } from './store/reducer/music.reducer';
import {RouterModule, Routes} from '@angular/router';

const musicRoutes: Routes = [
  { path: '', component: MusicShellComponent },
  { path: 'fav', component: MyFavComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(musicRoutes),
    StoreModule.forFeature('music', reducer),
    EffectsModule.forFeature(
      [MusicEffects]
    )
  ],
  declarations: [MyFavComponent, MusicShellComponent, SearchComponent, MusicListComponent, MusicDetailComponent, MusicSearchComponent]
})
export class MusicModule { }
