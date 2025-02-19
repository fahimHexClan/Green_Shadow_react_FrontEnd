import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cropdata } from '../../Model/CropData';

interface CropState {
    items: Cropdata[];
}

const initialState: CropState = {
    items: [],
};

const cropItemSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Cropdata>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<Cropdata[]>) => {
            state.items = action.payload;
        },
        removeCropItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<Cropdata>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeCropItem, updateItem } = cropItemSlice.actions;
export default cropItemSlice.reducer;
