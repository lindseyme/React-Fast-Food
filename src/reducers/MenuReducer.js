import GET_MENU from '../constants/ActionTypes';

export function errors(state = { item_name: "", price: "" }, action) {
  switch (action.type) {
    case GET_MENU:
      return { item_name: action.payload, price: action.password };
    default:
      return state;
  }
}
