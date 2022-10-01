import { AppAction, AppActionTypes, IAppState } from '../../models/appModel';
import { VIEWS } from '../../models/viewModel';

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
