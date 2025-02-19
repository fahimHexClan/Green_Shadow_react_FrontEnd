import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MonitoringLogData } from '../../Model/MonitorLogData';

interface MonitorLogState  {
    items: MonitoringLogData[];
}

const initialState: MonitorLogState  = {
    items: [],
};

const MonitoringLogItemSlice  = createSlice({
    name: 'monitoringLog',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<MonitoringLogData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<MonitoringLogData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<MonitoringLogData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, getItems, removeItem, updateItem } = MonitoringLogItemSlice.actions;
export default MonitoringLogItemSlice.reducer;