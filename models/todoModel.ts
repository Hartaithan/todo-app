export interface ITodoItem {
  id: number;
  title: string;
  complete: boolean;
}

export interface ITodoState {
  todos: ITodoItem[];
}

export enum TodoActionTypes {
  ADD_TODO = 'AddTodoAction',
  DELETE_TODO = 'DeleteTodoAction',
  TOGGLE_TODO = 'ToggleTodoAction',
  SET_TODOS = 'SetTodosAction',
}

export interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: string;
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: number;
}

export interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}

export interface SetTodosAction {
  type: TodoActionTypes.SET_TODOS;
  payload: ITodoItem[];
}

export type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | SetTodosAction;
