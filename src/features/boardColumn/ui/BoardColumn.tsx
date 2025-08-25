import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { TaskList } from './TaskList';
import { ColumnHeader } from './ColumnHeader';
import type { IBoardColumn } from '../model/types';
import type { FC } from 'react';

export const BoardColumn: FC<IBoardColumn> = ({ title, status, tasks }) => {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        'flex-1 rounded-sm p-4 transition-colors',
        isOver ? 'bg-blue-100' : 'bg-gray-100',
      )}
    >
      <ColumnHeader title={title} />
      <TaskList tasks={tasks} />
    </div>
  );
};
