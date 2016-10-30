let nextTodoId = 0;
export const addTodo = (text) => {
  const returnObject = {
    type: 'ADD_TODO',
    id: nextTodoId += 1,
    text,
  };
  return returnObject;
};

export const setVisibilityFilter = (filter) => {
  const returnObject = {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
  return returnObject;
};

export const toggleTodo = (id) => {
  const returnObject = {
    type: 'TOGGLE_TODO',
    id,
  };
  return returnObject;
};
