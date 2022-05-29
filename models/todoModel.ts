export interface ITodoItem {
  id: number;
  title: string;
  complete: boolean;
}

export interface ITodoState {
  todos: ITodoItem[];
}

export interface ITodoItemProps {
  item: ITodoItem;
}

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
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

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction;
