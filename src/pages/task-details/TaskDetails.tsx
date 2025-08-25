import { useTaskStore } from '@/entities/task/model/taskStore';
import { Modal } from '@/shared/ui/Modal/Modal';
import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskDetails = memo(({}) => {
  const params = useParams();
  const navigate = useNavigate();

  const task = useTaskStore((state) => state.tasks.find((t) => t.id === params.id)) ?? null;
  if (!task) return null;

  const { title, description, priority, deadline, assignee } = task;

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Modal onClose={handleClose}>
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

export default TaskDetails;
