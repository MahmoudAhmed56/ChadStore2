import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products:
    localStorage.getItem("cartList") !== null
      ? JSON.parse(localStorage.getItem("cartList"))
      : [],
  totalQuantity:
    localStorage.getItem("cartQuantity") !== null
      ? JSON.parse(localStorage.getItem("cartQuantity"))
      : 0,
  totalPrice:
    localStorage.getItem("cartTotal") !== null
      ? JSON.parse(localStorage.getItem("cartTotal"))
      : 0,
};

// adding this function to prevent repear code
const setCartListFunc = (products, totalPrice, totalQuantity) => {
  localStorage.setItem("cartList", JSON.stringify(products));
  localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
  localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.imgs,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
      setCartListFunc(
        state.products.map((item) => item),
        state.totalPrice,
        state.totalQuantity
      );
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findIndex = state.products.find((item) => item.id === id);
      if (findIndex) {
        state.totalPrice -= findIndex.price;
        state.totalQuantity -= findIndex.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
      setCartListFunc(
        state.products.map((item) => item),
        state.totalPrice,
        state.totalQuantity
      );
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findIndex = state.products.find((item) => item.id === id);

      if (findIndex && findIndex.quantity >= 1) {
        findIndex.quantity++;
        state.totalPrice += findIndex.price;
        state.totalQuantity++;
        state.totalPrice += findIndex.price;
      }
      setCartListFunc(
        state.products.map((item) => item),
        state.totalPrice,
        state.totalQuantity
      );
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findIndex = state.products.find((item) => item.id === id);
      if (findIndex && findIndex.quantity > 1) {
        findIndex.quantity--;
        state.totalPrice -= findIndex.price;
        state.totalQuantity--;
        state.totalPrice -= findIndex.price;
      }
      setCartListFunc(
        state.products.map((item) => item),
        state.totalPrice,
        state.totalQuantity
      );
    },
  },
  // extraReducers
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
