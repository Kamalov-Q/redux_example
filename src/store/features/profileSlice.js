import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User1",
  email: "user1@gmail.com",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { userName, userEmail } = action.payload;
      state.name = userName;
      state.email = userEmail;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
