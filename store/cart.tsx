import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  cartImage: string;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as CartItem[],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemInCart = state.cart.find((i) => i.id === item.id);
      if (itemInCart) {
        itemInCart.quantity + item.quantity;
        itemInCart.price + item.price * item.quantity;
      } else {
        state.cart.push({
          ...item,
          quantity: item.quantity,
          price: item.price * item.quantity,
        });
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseItemQuantity: (state, action) => {
      const item = action.payload;
      const itemInCart = state.cart.find((i) => i.id === item.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
        itemInCart.price + item.price;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const item = action.payload;
      const itemInCart = state.cart.find((i) => i.id === item.id);
      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
        itemInCart.quantity -= 1;
        itemInCart.price - item.price;
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
