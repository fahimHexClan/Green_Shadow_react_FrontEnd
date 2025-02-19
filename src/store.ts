import { configureStore } from '@reduxjs/toolkit';
import  CropReducer  from './Reducer/slice/CropItem';
import EquipmentReducer  from './Reducer/slice/EquipmentItem';
const store = configureStore({
  reducer: {
   
    crop: CropReducer,
    equipment: EquipmentReducer,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;