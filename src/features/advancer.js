import {createSlice} from "@reduxjs/toolkit";

export const advancerSlice = createSlice({
    name: "advancer",
    initialState: {
        value: {
            damage: 0,
            strength: 0,
            stamina: 0,
            health: 0,
            energy: 0,
        }
    },
    reducers: {
        updateAdvancers: (state, action) => {
            state.value = action.payload
        },
        
    }
})

// export methods to update state
export const {updateAdvancers} = advancerSlice.actions

export default advancerSlice.reducer