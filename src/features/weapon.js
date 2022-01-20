import {createSlice} from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
    name: "weapon",
    initialState: {
        value: null
    },
    reducers: {
        updateWeapon: (state, action) => {
            state.value = action.payload
        }
    }
})

// export methods to update state
export const {updateWeapon} = weaponSlice.actions

export default weaponSlice.reducer