import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        console.log('but this add item actual function not get called')
        return cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0)
    }
)