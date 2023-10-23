import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/cart/ProductSlice";


export const store=configureStore({
    reducer:{

        cart:ProductSlice
    }
})
