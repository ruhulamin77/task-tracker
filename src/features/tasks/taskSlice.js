import { createSlice } from '@reduxjs/toolkit';

const tasks = localStorage.getItem('tasks');
const initialState = {
  tasks: JSON.parse(tasks) || [],
  taskToUpdate: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: crypto.randomUUID() });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      state.taskToUpdate = null;
    },

    taskToUpdate: (state, action) => {
      state.taskToUpdate = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask, taskToUpdate } =
  taskSlice.actions;
export default taskSlice.reducer;
