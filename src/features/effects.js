import {createSlice} from "@reduxjs/toolkit";

export const effectsSlice = createSlice({
    name: "effects",
    initialState: {
        value: null
    },
    reducers: {
        setEffects: (state, action) => {
            state.value = action.payload
        }
    }
})

// export methods to update state
export const {setEffects} = effectsSlice.actions

export default effectsSlice.reducer