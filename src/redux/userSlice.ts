import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {initialState, IUserLogin} from "./types.ts";

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<IUserLogin>) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.user = initialState.user;
            state.isAuth = false;
        },
        auth: (state, action: PayloadAction<IUserLogin>) => {
            state.user = {
                id: action.payload.id,
                isAdmin: action.payload.isAdmin,
                email: action.payload.email,
                password: "",
            };
            state.isAuth = true;
        },
    },
});

export const { login, logout, auth } = userSlice.actions;
export default userSlice.reducer;
