import * as fromCart from './cart.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';



const getMusicFeatureState = createFeatureSelector<fromCart.CartState>('cart');

export const getCartItems = createSelector(
  getMusicFeatureState,
  state => state.cart
);
export const getCount = createSelector(
  getMusicFeatureState,
  state => state.count
);

