// import * as fromRoot from '../../../state/app.state';
import * as fromMusic from './music.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

// export interface State extends fromRoot.State {
//   Music: fromMusic.MusicState;
// }

const getMusicFeatureState = createFeatureSelector<fromMusic.MusicState>('music');

export const getMusic = createSelector(
  getMusicFeatureState,
  state => state.Music
);

export const getError = createSelector(
  getMusicFeatureState,
  state => state.error
);

export const getSelectedMusic = createSelector(
  getMusicFeatureState,
  state => state.selectedMusic
);

export const getFavorite = createSelector(
  getMusicFeatureState,
  state => state.favorite
);

export const getCount = createSelector(
  getMusicFeatureState,
  state => state.count
);
export const getPage = createSelector(
  getMusicFeatureState,
  state => state.pageNum
);
