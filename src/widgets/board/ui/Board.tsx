import { DndContext, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { BoardColumn } from '@/features/boardColumn/ui/BoardColumn';
import { useMemo } from 'react';
import { BOARD_COLUMNS_SCHEMA } from '../model/schema';
import type { ITask } from '@/shared/model/types';
import { useTaskStore } from '@/entities/task/model/taskStore';
import { useModalStore } from '@/shared/model/commonStore';
import { Button } from '@/shared/ui/Button/Button';

export const Board = () => {
  const { tasks, updateTask } = useTaskStore();
  const { openModal } = useModalStore();

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const sensors = useSensors(pointerSensor);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;

    updateTask({
      id: String(active.id),
      status: over.id as ITask['status'],
    });
  };

  return (
    <div className="p-6 h-screen bg-gray-50 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kanban Board</h1>

        <Button onClick={() => openModal('task')}>+ Створити</Button>
      </div>

      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <div className="md:gap-6 md:min-h-svh md:grid md:grid-cols-3">
          {BOARD_COLUMNS_SCHEMA.map(({ title, status }) => {
            const tasksForColumn = useMemo(
              () => tasks.filter((t) => t.status === status),
              [tasks, status],
            );

            return (
              <BoardColumn key={status} title={title} status={status} tasks={tasksForColumn} />
            );
          })}
        </div>
      </DndContext>
    </div>
  );
};
