import { createSlice } from "@reduxjs/toolkit";

const favorite = JSON.parse(localStorage.getItem("favorite"));

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favorite
    ? favorite
    : {
        products: [],
      },
  reducers: {
    addFav: (state, action) => {
      if (
        state.products.filter((product) => product._id === action.payload._id)
          .length > 0
      )
        return;
      state.products.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state));
    },
    removeFav: (state, action) => {
      const productId = action.payload._id;
      const removedProduct = state.products.find(
        (product) => product._id === productId
      );

      if (removedProduct) {
        state.products = state.products.filter(
          (product) => product._id !== productId
        );
      }
      localStorage.setItem("favorite", JSON.stringify(state));
    },
  },
});

export const { addFav, removeFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
