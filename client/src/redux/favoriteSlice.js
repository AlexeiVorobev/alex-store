import {createSlice} from "@reduxjs/toolkit"

const favorite = JSON.parse(localStorage.getItem("favorite"));

const cartSlice = createSlice({
    name: "favorite",
    initialState: favorite ? favorite : {
        products: [],
        quantity: 0
    },
    reducers: {
         addFav:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            localStorage.setItem('favorite', JSON.stringify(state))
         },
         removeFav: (state, action) => {
            const productId = action.payload;
            const removedProduct = state.products.find(
              (product) => product._id === productId
            );
      
            if (removedProduct) {
              state.quantity -= 1;
              state.products = state.products.filter(
                (product) => product._id !== productId
              );
            }
            localStorage.setItem('cart', JSON.stringify(state))
          },
    }
});

export const {addFav: addProduct, removeFav: removeProduct} = cartSlice.actions
export default cartSlice.reducer;