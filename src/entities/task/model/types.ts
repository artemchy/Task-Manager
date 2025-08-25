import type { ITask } from '@/shared/model/types';

export type User = {
  id: string;
  name: string;
};

export type ModalState = {
  selectedUser: User | null;
};

export type updatedTaskType = Partial<ITask> & { id: string };

export type TaskState = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (updatedTask: updatedTaskType) => void;
  removeTask: (id: string) => void;
};

export type UserState = {
  setSelectedUser: (user: User | null) => void;
  selectedUser: User | null;
};
