import { TaskCard } from '@/entities/task';
import type { Task } from '@/shared/model/types';
import { memo } from 'react';

export const TaskList = memo(({ tasks }: { tasks: Task[] }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
});
