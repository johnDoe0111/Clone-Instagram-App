import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser, userState } from "../../types/IUser"
import { autorization, checkAutorization } from "./autorizationAction"

const initialState: userState = {
    user: undefined,
    isAdmin: false,
    isLoading: false,
}

export const autorizationSlice = createSlice({
    name: 'autorization',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(autorization.pending, state => {
            state.isAdmin = true
        })
        builder.addCase(autorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isAdmin = true
            state.user = action.payload
        });
        builder.addCase(autorization.rejected, state => {
            state.isAdmin = false
            console.log('error');
            
        })
        builder.addCase(checkAutorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isAdmin = true
            state.user = action.payload
        });
        builder.addCase(checkAutorization.rejected, state => {
            state.isAdmin = false
        })
    },
});

export default autorizationSlice.reducer;