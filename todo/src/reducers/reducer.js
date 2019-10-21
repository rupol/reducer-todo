export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          id: Date.now(),
          completed: false
        }
      ];
    case "MARK_COMPLETED":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
