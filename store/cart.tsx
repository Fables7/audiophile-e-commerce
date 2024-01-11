import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  cartImage: string;
  short?: string;
}

export type RootState = {
  cart: {
    cart: CartItem[];
    total: number;
    purchases: { items: CartItem[]; total: number };
  };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as CartItem[],
    purchases: { items: [] as CartItem[], total: 0 },
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const itemInCart = state.cart.find((i) => i.id === product.id);
      if (itemInCart) {
        itemInCart.quantity += quantity;
        console.log(itemInCart.quantity);
        state.total += product.price * quantity;
      } else {
        console.log(product);
        state.cart.push({
          ...product,
          quantity: quantity,
          price: product.price,
        });
        state.total += product.price * quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
    purchaseItems: (state) => {
      state.purchases.items = state.cart;
      state.purchases.total = state.total;
      state.cart = [];
      state.total = 0;
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload;
      const itemInCart = state.cart.find((i) => i.id === id);
      if (itemInCart) {
        itemInCart.quantity += 1;
        state.total += itemInCart.price;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const id = action.payload;
      const itemInCart = state.cart.find((i) => i.id === id);
      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          state.total -= itemInCart.price;
          state.cart = state.cart.filter((i) => i.id !== id);
          return;
        }
        itemInCart.quantity -= 1;
        state.total -= itemInCart.price;
      }
    },
  },
});

export const getItemQuantity = (state: RootState, id: string) => {
  const itemInCart = state.cart.cart.find((i) => i.id === id);
  return itemInCart?.quantity || 0;
};

export const {
  addToCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  purchaseItems,
} = cartSlice.actions;

export default cartSlice.reducer;
