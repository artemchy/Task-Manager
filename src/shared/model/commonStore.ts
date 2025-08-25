import { create } from 'zustand';
import type { ModalState } from './types';

export const useModalStore = create<ModalState>((set) => ({
  modals: [],
  name: null,
  payload: null,

  openModal: (name, payload) =>
    set((state) => ({
      modals: [...state.modals, { name, payload }],
      name,
      payload,
    })),

  closeModal: () =>
    set((state) => {
      const newModals = state.modals.slice(0, -1);
      return {
        modals: newModals,
        name: newModals.length ? newModals[newModals.length - 1].name : null,
        payload: newModals.length ? newModals[newModals.length - 1].payload : null,
      };
    }),
}));
