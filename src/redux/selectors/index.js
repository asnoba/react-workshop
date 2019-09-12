import { createSelector } from 'reselect';

const selectTodos = createSelector(
  state => state.todos,
  todos =>
    Object.keys(todos).map(key => ({
      id: key,
      ...todos[key],
    })),
);

export { selectTodos };
