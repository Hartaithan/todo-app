import { AppAction, AppActionTypes, IAppState } from '../../models/AppModel';
import { VIEWS } from '../../models/ViewModel';

const initialState: IAppState = {
  view: VIEWS.list,
};

const appReducer = (state = initialState, action: AppAction): IAppState => {
  switch (action.type) {
    case AppActionTypes.SET_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};

export default appReducer;
