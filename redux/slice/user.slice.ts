import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { name: "", image: "", imageUri: "" },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload
        },
        addImage: (state, action) => {
            state.image = action.payload.image;
            state.imageUri = action.payload.uri;

        },
        logout: (state) => {
            state.name = "";
            state.image = "";
            state.imageUri = "";

        }
    }
})

export const { addUser, addImage, logout } = userSlice.actions;

export default userSlice.reducer;

