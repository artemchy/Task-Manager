import { Modal } from '@/shared/ui/Modal/Modal';
import { memo, type FC } from 'react';
import { USERS_MOCK } from '../model/contastants';
import { useModalStore } from '@/shared/model/commonStore';
import { useUserStore } from '@/entities/task/model/taskStore';

export const SelectUser: FC<{ onClose: () => void }> = memo(({ onClose }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  const handleSelect = (user: { id: string; name: string }) => {
    closeModal();
    setSelectedUser(user);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Вибери Користувача</h2>
      <ul className="space-y-2">
        {USERS_MOCK.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => handleSelect(user)}
              className="w-full text-left px-3 py-2 bg-gray-100 rounded-sm hover:bg-gray-200"
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
});
