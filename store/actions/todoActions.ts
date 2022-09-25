import {
  AddTodoAction,
  DeleteTodoAction,
  TodoActionTypes,
  ToggleTodoAction,
} from '../../models/TodoModel';

export const addTodoAction = (payload: string): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload,
});

export const deleteTodoAction = (payload: number): DeleteTodoAction => ({
  type: TodoActionTypes.DELETE_TODO,
  payload,
});

export const toggleTodoAction = (payload: number): ToggleTodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload,
});
