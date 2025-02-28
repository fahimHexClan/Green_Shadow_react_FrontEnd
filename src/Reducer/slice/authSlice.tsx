import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// Export reducer
export default authSlice.reducer;