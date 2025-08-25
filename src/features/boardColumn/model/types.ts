import type { Task } from "@/shared/model/types";

export interface IBoardColumn {
  title: string;
  status: Task['status'];
  tasks: Task[];
}
