import { useTaskStore } from '@/entities/task/model/taskStore';
import { TaskDetailsModal } from '@/entities/task/ui/TaskDetailsModal';
import { useModalStore } from '@/shared/model/commonStore';

export const TaskDetailsContainer = () => {
  const { closeModal } = useModalStore();
  const task = useTaskStore((state) => state.tasks.find((t) => t.id)) ?? null;

  return (
    <>
      <TaskDetailsModal task={task} closeModal={closeModal} />
    </>
  );
};
