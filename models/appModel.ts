import { VIEWS } from './viewModel';

export interface IAppState {
  view: VIEWS;
}

export enum AppActionTypes {
  SET_VIEW = 'SET_VIEW',
}

export interface SetViewAction {
  type: AppActionTypes.SET_VIEW;
  payload: VIEWS;
}

export type AppAction = SetViewAction;
