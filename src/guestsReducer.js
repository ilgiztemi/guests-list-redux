import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guests: [],
};

export const guestsSlice = createSlice({
  name: "guests",
  initialState,
  reducers: {
    guests_add: (state, action) => {
      state.guests.push(action.payload);
      console.log(action, "action");
      console.log(state, "state");
    },
    guests_delete: (state, action) => {
      const newState = state.guests.filter((el) => el.id !== action.payload.id);
      state.guests = newState;
    },
    guests_edit: (state, action) => {
      const guest = state.guests.find((todo) => todo.id === action.payload.id);
      guest.text = action.payload.text;
    },
    guests_complete: (state, action) => {
      const guest = state.guests.find((todo) => todo.id === action.payload.id);
      guest.check = !guest.check;
    },
  },
});
export const { guests_add, guests_delete, guests_edit, guests_complete } =
  guestsSlice.actions;
export default guestsSlice.reducer;
