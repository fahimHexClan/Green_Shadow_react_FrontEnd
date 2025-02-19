import { configureStore } from '@reduxjs/toolkit';
import  CropReducer  from './Reducer/slice/CropItem';
import EquipmentReducer  from './Reducer/slice/EquipmentItem';
import vehicleReducer from './Reducer/slice/VehicleItem';
const store = configureStore({
  reducer: {
   
    crop: CropReducer,
    equipment: EquipmentReducer,
    vehicle: vehicleReducer, 
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;