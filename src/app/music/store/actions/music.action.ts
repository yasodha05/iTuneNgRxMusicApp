import { Action } from '@ngrx/store';

export enum MusicActionTypes {
  GetMusic = 'GetMusic',
  GetSuccess = 'GetSuccess',
  GetFail = 'GetFail',
  CurrentMusic = 'Current Music',
  AddFavorite = 'Add Favorite',
  DeleteFavorite = 'Delete Favorite',
  ClearMusic = 'Clear Music'
}

export class GetMusic implements Action {
  readonly type = MusicActionTypes.GetMusic;
  constructor(public payload: string) { }
}
export class CurrentMusic implements Action {
  readonly type = MusicActionTypes.CurrentMusic;
  constructor(public payload: any) { }
}
export class GetSuccess implements Action {
  readonly type = MusicActionTypes.GetSuccess;

  constructor(public payload) { }
}
export class AddFavorite implements Action {
  readonly type = MusicActionTypes.AddFavorite;

  constructor(public payload) { }
}
export class DeleteFavorite implements Action {
  readonly type = MusicActionTypes.DeleteFavorite;

  constructor(public payload) { }
}
export class GetFail implements Action {
  readonly type = MusicActionTypes.GetFail;

  constructor(public payload) { }
}

export class ClearMusic implements Action {
  readonly type = MusicActionTypes.ClearMusic;


}




export type MusicActions = GetMusic | GetSuccess | GetFail | CurrentMusic | AddFavorite | DeleteFavorite | ClearMusic;
