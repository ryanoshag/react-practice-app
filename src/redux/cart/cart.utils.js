export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems
        .find(item => item.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => item.id === cartItemToAdd.id ?
            { ...item, quantity: item.quantity + 1 } :
            item);
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const reduceItemQuantity = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems
        .find(item => item.id === cartItemToReduce.id);

    if (existingCartItem.quantity <= 1) {
        return cartItems.filter(item => item.id !== existingCartItem.id);
    }

    return cartItems.map(item => item === existingCartItem ?
        { ...item, quantity: item.quantity - 1 } :
        item);
}