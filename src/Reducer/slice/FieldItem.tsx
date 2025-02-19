import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldData } from '../../Model/FieldData';

interface FieldState  {
    items: FieldData[];
}

const initialState: FieldState  = {
    items: [],
};

const FieldItemSlice  = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<FieldData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<FieldData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<FieldData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeItem, updateItem } = FieldItemSlice.actions;
export default FieldItemSlice.reducer;