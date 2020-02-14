import { GET_USER_PLAYLISTS, SET_USER_PLAYLISTS, GET_TRACKS, SET_TRACKS, SET_DETAILS, SPOTIFY_FAILURE, Token } from '../types';

interface GetUserPlaylistsAction {
  type: typeof GET_USER_PLAYLISTS,
  token: Token
};

interface SetUserPlaylistsAction {
  type: typeof SET_USER_PLAYLISTS,
  playlists: any
};

interface GetTracksAction {
  type: typeof GET_TRACKS,
  payload: {
    token: any,
    uri: string,
  }
};

interface SetTracksAction {
  type: typeof SET_TRACKS,
  payload: {
    id: string,
    tracks: any
  }
};

interface SetDetailsAction {
  type: typeof SET_DETAILS,
  details: any
};

interface SpotifyErrorAction {
  type: typeof SPOTIFY_FAILURE,
  error: any
};

type ActionTypes = (
  GetUserPlaylistsAction |
  SetUserPlaylistsAction |
  GetTracksAction |
  SetTracksAction |
  SetDetailsAction |
  SpotifyErrorAction
);

type StateType = {
  tracks?: any
}

const InitialState: StateType = { tracks: {} };

const reducer = (state = InitialState, action: ActionTypes) => {
  switch (action.type) {
     case GET_USER_PLAYLISTS:
        return { ...state, loading: true };
     case SET_USER_PLAYLISTS:
        return { ...state, playlists: action.playlists, loading: false }
     case GET_TRACKS:
        return { ...state, loading: true };
     case SET_TRACKS:
        const tracks = { ...state.tracks };
        tracks[action.payload.id] = action.payload.tracks;
        return { ...state, tracks, current_track: action.payload.id, loading: false }
     case SET_DETAILS:
        return { ...state, details: action.details }
     case SPOTIFY_FAILURE:
        return { ...state, error: action.error, loading: false }
     default:
        return state;
   }
};
export default reducer;
