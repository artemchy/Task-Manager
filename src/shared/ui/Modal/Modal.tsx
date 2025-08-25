import type { FC, ReactNode } from 'react';

interface IModal {
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm shadow-lg p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer duration-300 ease-out"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
