import {createSlice} from "@reduxjs/toolkit"

const cart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
    name: "cart",
    initialState: cart ? cart : {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
         addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
            localStorage.setItem('cart', JSON.stringify(state))
         },
         removeProduct: (state, action) => {
            const productId = action.payload;
            const removedProduct = state.products.find(
              (product) => product._id === productId
            );
      
            if (removedProduct) {
              state.quantity -= 1;
              state.products = state.products.filter(
                (product) => product._id !== productId
              );
              state.total -= removedProduct.price;
            }
            localStorage.setItem('cart', JSON.stringify(state))
          },
          updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find((product) => product._id === id);
          
            if (product) {
              const quantityDiff = quantity - product.quantity;
              product.quantity = quantity;
              state.quantity += quantityDiff;
              state.total += quantityDiff * product.price;
              localStorage.setItem("cart", JSON.stringify(state));
            }
          }
    }
});

export const {addProduct, removeProduct, updateQuantity} = cartSlice.actions
export default cartSlice.reducer;