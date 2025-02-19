import { configureStore } from '@reduxjs/toolkit';
import  CropReducer  from './Reducer/slice/CropItem';
import EquipmentReducer  from './Reducer/slice/EquipmentItem';
import vehicleReducer from './Reducer/slice/VehicleItem';
import MonitoringLogReducer from './Reducer/slice/MonitorLogItem';
const store = configureStore({
  reducer: {
   
    crop: CropReducer,
    equipment: EquipmentReducer,
    vehicle: vehicleReducer, 
    monitorLog:MonitoringLogReducer ,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;