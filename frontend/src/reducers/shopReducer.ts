import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShopState } from "../Interfaces/shop";

const initialState: IShopState = {
    name: "Sample"
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        updateShopName(state, action: PayloadAction<IShopState>) {
            state.name = (action.payload.name === "")
            ? "undefined" 
            : action.payload.name;
        }
    }
})

export const { updateShopName } = shopSlice.actions;
export default shopSlice.reducer;