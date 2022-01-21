import {createSlice} from "@reduxjs/toolkit";

export const playerinventorySlice = createSlice({
    name: "playerinventory",
    initialState: {
        value: []
    },
    reducers: {
        updatePlayerInventorySlots: (state, action) => {
            const slotsNumber = action.payload
            state.value=[]
            for (let i=0; i<slotsNumber; i++){
                state.value.push("") 
            }
        },
        getItemtoSlot:(state, action) =>{
            state.value=action.payload
            // console.log("ka atiduodam?",action.payload ) 

        }
    }
})

// export methods to update state
export const {updatePlayerInventorySlots, getItemtoSlot} = playerinventorySlice.actions

export default playerinventorySlice.reducer