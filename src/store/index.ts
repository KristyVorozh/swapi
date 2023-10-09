import { configureStore } from '@reduxjs/toolkit'
import {peoplesSlice} from "../features/peoples";

export const store = configureStore({
    reducer: {
        peoples: peoplesSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch