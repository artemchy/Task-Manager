import { TaskCard } from '@/entities/task';
import type { ITask } from '@/shared/model/types';
import { memo } from 'react';

export const TaskList = memo(({ tasks }: { tasks: ITask[] }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
});
