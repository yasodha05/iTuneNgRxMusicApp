import { MusicActionTypes, MusicActions } from '../actions/music.action';


export interface MusicState {
  selectedMusic: any;
  favorite: any[];
  Music: any[];
  error: string;
  count: number;
}

const initialState: MusicState = {
  selectedMusic: null,
  favorite: [],
  Music: [],
  error: '',
  count: 0
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
        favorite: [...state.favorite, action.payload],
        count: state.favorite.length + 1
      };
    case MusicActionTypes.DeleteFavorite:
      return {
        ...state,
        favorite: state.favorite.filter(music => music !== action.payload),
        count: state.count - 1,
        error: ''
      };
    case MusicActionTypes.ClearMusic:
      return {
        ...state,
        selectedMusic: null,
        Music: [],
        error: ''
      };
    default:
      return state;
  }
}
