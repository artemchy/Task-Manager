import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TaskState, UserState } from './types';

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      selectedUser: null,
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: ({ id, ...data }) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...data } : task)),
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: 'tasks-storage', // localStorage key
    },
  ),
);

export const useUserStore = create<UserState>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}));
