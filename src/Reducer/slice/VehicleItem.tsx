import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleData } from '../../Model/VehicleData';

interface VehicleState  {
    items: VehicleData[];
}

const initialState: VehicleState  = {
    items: [],
};

const VehicleItemSlice  = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<VehicleData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<VehicleData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<VehicleData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeItem, updateItem } = VehicleItemSlice.actions;
export default VehicleItemSlice.reducer;