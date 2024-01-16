import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state, actions) => {
      return (state = !state);
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
// export const { todoAdded, todoToggled } = todosSlice.actions
// export default todosSlice.reducer
