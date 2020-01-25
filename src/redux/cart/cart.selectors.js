import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        console.log('but this add item actual function not get called')
        return cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
    }
)
 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        console.log('but this add item actual function not get called')
        return cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0)
    }
)