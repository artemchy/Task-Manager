import type { Task } from '@/shared/model/types';

export type User = {
  id: string;
  name: string;
};

export type ModalState = {
  selectedUser: User | null;
};

export type updatedTaskType = Partial<Task> & { id: string };

export type TaskState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: updatedTaskType) => void;
  removeTask: (id: string) => void;
};

export type UserState = {
  setSelectedUser: (user: User | null) => void;
  selectedUser: User | null;
};

export interface ITaskDetailsModal {
  task: Task | null;
  closeModal: any;
}
