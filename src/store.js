import { configureStore } from '@reduxjs/toolkit'
import toggleModeReducer from './ducks/toggleModeSlice'

export const store = configureStore({
    reducer: {
        mode: toggleModeReducer
    }
})