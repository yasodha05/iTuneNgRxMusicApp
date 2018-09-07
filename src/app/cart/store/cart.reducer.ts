import { CartActionTypes, CartActions } from './cart.actions';


export interface CartState {
  cart: any[];
  count: number;
}

const initialState: CartState = {
  cart: [],
  count: 0,
};

export function cartReducer(state = initialState, action: CartActions): CartState {

  switch (action.type) {
    case CartActionTypes.AddToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.cart.length + 1
      };
    case CartActionTypes.DeleteItem:
      return {
        ...state,
        cart: state.cart.filter(music => music !== action.payload),
        count: state.cart.length - 1
      };
    case CartActionTypes.ClearCart:
      return {
        ...state,
        cart: [],
        count: 0
      };
    default:
      return state;
  }
}
