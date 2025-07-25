import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: crypto.randomUUID() });
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
