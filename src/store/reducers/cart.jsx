import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const hasItem = state.some((item) => item.id === payload);

      if (!hasItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];

      return state.filter((item) => item.id !== payload);
    },
    changeQty: (state, { payload }) => {
      state.map((cartItem) => {
        if (cartItem.id === payload.id)
          cartItem.quantidade += payload.quantidade;

        return cartItem;
      });
    },
    resetCart: () => initialState,
  },
});

export const { changeCart, changeQty, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
