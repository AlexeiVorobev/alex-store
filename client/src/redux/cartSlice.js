import {createSlice} from "@reduxjs/toolkit"

const cart = JSON.parse(localStorage.getItem("cart"));

const calculateTotal = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cart ? cart : {
        products: [],
        total: 0
    },
    reducers: {
         addProduct:(state, action) => {
            state.products.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
            state.total = calculateTotal(state.products)
         },
         removeProduct: (state, action) => {
            const productId = action.payload;
            const removedProduct = state.products.find(
              (product) => product._id === productId
            );
      
            if (removedProduct) {
              state.products = state.products.filter(
                (product) => product._id !== productId
              );
            }
            state.total = calculateTotal(state.products)
            localStorage.setItem('cart', JSON.stringify(state))
          },
          updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find((product) => product._id === id);
          
            if (product) {
              product.quantity = quantity;
              localStorage.setItem("cart", JSON.stringify(state));
            }
            state.total = calculateTotal(state.products)
          }
    }
});

export const {addProduct, removeProduct, updateQuantity} = cartSlice.actions
export default cartSlice.reducer;