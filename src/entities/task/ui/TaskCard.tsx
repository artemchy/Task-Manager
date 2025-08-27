import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { memo, type FC } from 'react';
import type { ITask } from '@/shared/model/types';
import { useNavigate } from 'react-router-dom';

interface ITaskCard {
  task: ITask;
}

export const TaskCard: FC<ITaskCard> = memo(({ task }) => {
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleClick = () => navigate(`task-details/${task.id}`);

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={handleClick}
      {...attributes}
      {...listeners}
      className="bg-white shadow-md rounded-sm p-3 mb-3 border border-gray-200 cursor-pointer active:cursor-grabbing"
    >
      <h4 className="font-medium text-gray-800">{task.title}</h4>
    </div>
  );
});
