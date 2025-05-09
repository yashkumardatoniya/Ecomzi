import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    remove: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
