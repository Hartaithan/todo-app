import { AppActionTypes, SetViewAction } from '../../models/AppModel';
import { VIEWS } from '../../models/ViewModel';

export const setViewAction = (payload: VIEWS): SetViewAction => ({
  type: AppActionTypes.SET_VIEW,
  payload,
});
