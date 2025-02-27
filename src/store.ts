import { configureStore } from '@reduxjs/toolkit';
import  CropReducer  from './Reducer/slice/CropItem';
import EquipmentReducer  from './Reducer/slice/EquipmentItem';
import vehicleReducer from './Reducer/slice/VehicleItem';
import MonitoringLogReducer from './Reducer/slice/MonitorLogItem';
import FieldReducer from './Reducer/slice/FieldItem';
import StaffReducer from './Reducer/slice/StaffItem';
import authReducer from './Reducer/slice/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    crop: CropReducer,
    equipment: EquipmentReducer,
    vehicle: vehicleReducer, 
    monitorLog:MonitoringLogReducer ,
    field: FieldReducer,
    staff: StaffReducer,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;