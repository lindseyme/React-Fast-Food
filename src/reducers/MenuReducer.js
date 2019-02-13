import {GET_MENU, GET_MENU_SUCCESS} from '../constants/ActionTypes';

export function errors(state = { item_name: "", price: "" }, action) {
  switch (action.type) {
    case GET_MENU:
      return { item_name: action.payload, price: action.password };
    default:
      return state;
  }
}

export function menu(state = [], action) {
  switch (action.type) {
    case GET_MENU_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
