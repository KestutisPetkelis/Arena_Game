import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        value: null
    },
    reducers: {
        updatePlayer: (state, action) => {
            state.value = action.payload
        },
        changeMoney:(state,action)=>{
            state.value.gold=action.payload
            console.log("MONEY?",action.payload)
        }
    }
})

// export methods to update state
export const {updatePlayer, changeMoney} = playerSlice.actions

export default playerSlice.reducer