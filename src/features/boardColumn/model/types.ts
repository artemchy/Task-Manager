import type { ITask } from '@/shared/model/types';

export interface IBoardColumn {
  title: string;
  status: ITask['status'];
  tasks: ITask[];
}
