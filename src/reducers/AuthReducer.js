const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function errors(state = { Email: "", password: "" }, action) {
  switch (action.type) {
    case "GET_ERRORS":
      return { Email: action.payload, password: action.password };
    default:
      return state;
  }
}
