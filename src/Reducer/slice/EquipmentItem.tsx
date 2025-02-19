import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EquipmentData } from '../../Model/EquipmentData';

interface EquipmentState  {
    items: EquipmentData[];
}

const initialState: EquipmentState  = {
    items: [],
};

const equipmentItemSlice  = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<EquipmentData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<EquipmentData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<EquipmentData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeItem, updateItem } = equipmentItemSlice.actions;
export default equipmentItemSlice.reducer;