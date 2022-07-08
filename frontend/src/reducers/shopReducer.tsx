import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShopState {
    shopName: String;
}

const initialState: IShopState = {
    shopName: "My Shop"
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        updateShopName(state, action) {
            state.shopName = action.payload.shopName;
        }
    }
})

export const { updateShopName } = shopSlice.actions;
export default shopSlice.reducer;