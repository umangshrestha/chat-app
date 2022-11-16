import { createSlice } from "@reduxjs/toolkit";

export const serverSlice = createSlice({
    name: "server",
    initialState: { url: "" },
    reducers: {
        addUrl: (state, action) => {
            state.url = action.payload
        },
        removeUrl: (state) => {
            state.url = ""
        },

    }
})

export const { addUrl, removeUrl } = serverSlice.actions;

export default serverSlice.reducer;

