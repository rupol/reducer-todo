export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        todos: [...state.todos, newTodo]
      };
    // case "MARK_COMPLETED":
    //   state.todos.map(task => {
    //     if (task.id === taskID) {
    //       return {
    //         ...task, // merge existing task
    //         completed: !task.completed // set completed to opposite value
    //       };
    //     } else {
    //       return task;
    //     }
    //   });
    default:
      return state;
  }
}
