import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        value: null
    },
    reducers: {
        updatePlayer: (state, action) => {
            state.value = action.payload
        }
    }
})

// export methods to update state
export const {updatePlayer} = playerSlice.actions

export default playerSlice.reducer