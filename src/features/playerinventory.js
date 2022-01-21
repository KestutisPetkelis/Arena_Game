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

        },
        changeSlotPlaces:(state, action) =>{
            const changeSlots = action.payload
            if (changeSlots>0){
                for(let i=0; i<changeSlots; i++){
                    state.value.push("") 
                }
            } else if(changeSlots<0){
                for(let i=0; i>changeSlots; i--){
                    state.value.pop()
                }
            }
            //state.value=action.payload
             console.log("Slotu pokytis",changeSlots, state.value) 

        },
    }
})

// export methods to update state
export const {updatePlayerInventorySlots, getItemtoSlot,changeSlotPlaces} = playerinventorySlice.actions

export default playerinventorySlice.reducer