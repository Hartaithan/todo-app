import { AppActionTypes, SetViewAction } from '../../models/appModel';
import { VIEWS } from '../../models/viewModel';

export const setViewAction = (payload: VIEWS): SetViewAction => ({
  type: AppActionTypes.SET_VIEW,
  payload,
});
