import { useTaskStore } from '@/entities/task/model/taskStore';
import { TaskDetailsModal } from '@/entities/task/ui/TaskDetailsModal';
import type { FC } from 'react';

export const TaskDetailsContainer: FC<{ onClose: () => void }> = ({ onClose }) => {
  const task = useTaskStore((state) => state.tasks.find((t) => t.id)) ?? null;

  return (
    <>
      <TaskDetailsModal task={task} closeModal={onClose} />
    </>
  );
};
