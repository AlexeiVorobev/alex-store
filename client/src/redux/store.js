import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import favoriteReducer from "./favoriteSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        favorite: favoriteReducer
    }
})