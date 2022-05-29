import {
  ITodoItem,
  ITodoState,
  TodoAction,
  TodoActionTypes,
} from '../../models/todoModel';

const initialState: ITodoState = {
  todos: [
    {
      id: 1,
      title: 'todo',
      complete: false,
    },
    {
      id: 2,
      title: 'todo 2',
      complete: true,
    },
    {
      id: 3,
      title: 'todo 3',
      complete: false,
    },
  ],
};

const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      const id = state.todos.length > 0 ? state.todos[0].id + 1 : 1;
      const newTodo: ITodoItem = { id, title: action.payload, complete: false };
      return { ...state, todos: [newTodo, ...state.todos] };
    case TodoActionTypes.DELETE_TODO:
      const filtered = state.todos.filter(todo => todo.id !== action.payload);
      return { ...state, todos: filtered };
    case TodoActionTypes.TOGGLE_TODO:
      const findedTodo = state.todos.find(item => item.id === action.payload);
      if (findedTodo) {
        findedTodo.complete = !findedTodo.complete;
      } else {
        console.error('todoReducer: todo not found');
      }
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
