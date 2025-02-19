import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaffData } from '../../Model/StaffData';

interface StaffState  {
    items: StaffData[];
}

const initialState: StaffState  = {
    items: [],
};

const StaffItemSlice  = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<StaffData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<StaffData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<StaffData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeItem, updateItem } = StaffItemSlice.actions;
export default StaffItemSlice.reducer;