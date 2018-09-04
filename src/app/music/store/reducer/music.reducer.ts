import { MusicActionTypes, MusicActions } from '../actions/music.action';


export interface MusicState {
  selectedMusic: any;
  favorite: any[];
  Music: any[];
  error: string;
}

const initialState: MusicState = {
  selectedMusic: null,
  favorite: [],
  Music: [],
  error: ''
};

export function reducer(state = initialState, action: MusicActions): MusicState {

  switch (action.type) {
    case MusicActionTypes.GetSuccess:
      return {
        ...state,
        Music: action.payload,
        error: ''
      };

    case MusicActionTypes.GetFail:
      return {
        ...state,
        Music: [],
        error: action.payload
      };

    case MusicActionTypes.CurrentMusic:
      return {
        ...state,
        selectedMusic: action.payload
      };
    case MusicActionTypes.AddFavorite:
      return {
        ...state,
        favorite: [...state.favorite, action.payload]
      };
    case MusicActionTypes.DeleteFavorite:
      return {
        ...state,
        favorite: state.favorite.filter(music => music !== action.payload),
        error: ''
      };
    default:
      return state;
  }
}
