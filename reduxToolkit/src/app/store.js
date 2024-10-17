import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Import your slice

export const store = configureStore({
  reducer: {
    todo: todoReducer, // 'todo' is the key for your reducer
  },
});

export default store;
