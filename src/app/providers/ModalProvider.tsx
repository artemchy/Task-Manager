import { TaskDetailsContainer } from "@/entities/task/ui/TaskDetailsContainer";
import { SelectUser } from "@/features/addTask/ui/SelectUser";
import { TaskCreate } from "@/features/addTask/ui/TaskCreate";
import { useModalStore } from "@/shared/model/commonStore";

export const ModalProvider = () => {
  const modals = useModalStore((state) => state.modals);
  const closeModal = useModalStore((s) => s.closeModal);

  if (modals.length === 0) return null;

  return modals.map((modal, i) => {
    switch (modal.name) {
      case 'task':
        return <TaskCreate key={i} onClose={closeModal} {...modal.payload} />;
      case 'user':
        return <SelectUser key={i} onClose={closeModal} {...modal.payload} />;
      case 'details':
        return <TaskDetailsContainer key={i} onClose={closeModal} {...modal.payload} />;
      default:
        return null;
    }
  });
};
