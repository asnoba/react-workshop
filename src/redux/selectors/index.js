import { createSelector } from 'reselect';

const todosSelector = createSelector(
  state => state.todos,
  todos =>
    Object.keys(todos).map(key => ({
      id: key,
      ...todos[key],
    })),
);

export { todosSelector };
