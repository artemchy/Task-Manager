import { Modal } from '@/shared/ui/Modal/Modal';
import { memo, type FC } from 'react';
import type { ITaskDetailsModal } from '../model/types';

export const TaskDetailsModal: FC<ITaskDetailsModal> = memo(({ task, closeModal }) => {
  if (!task) {
    return null;
  }

  const { title, description, priority, deadline, assignee } = task;
  debugger;
  return (
    <Modal onClose={closeModal}>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4">
        <p>
          <strong>Опис:</strong> {description}
        </p>
        <p>
          <strong>Пріоритет:</strong> {priority}
        </p>
        <p>
          <strong>Термін:</strong> {deadline}
        </p>
        <p>
          <strong>Виконавець:</strong> {assignee?.name || 'Не обрано'}
        </p>

        {task.file && (
          <div className="mt-6">
            <strong>Файл:</strong>
            {task.file.startsWith('data:image') ? (
              <img
                src={task.file}
                alt="attachment"
                className="mt-2 w-full max-w-md h-auto object-cover rounded-sm"
              />
            ) : (
              <a
                href={task.file}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                Скачати файл
              </a>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
});
