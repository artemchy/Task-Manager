import type { ReactNode } from 'react';

type PrioritiesType = 'Маленький' | 'Середній' | 'Високий';

type OptionType = {
  value: string;
  label: string;
};
type User = { id: string; name: string };

export interface IFormikField {
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'select' | 'date';
  options?: OptionType[];
  className?: string;
  min?: string;
  children?: ReactNode;
}

type Modal = {
  name: string;
  payload?: any;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: PrioritiesType;
  deadline: string;
  file?: string;
  assignee?: User | null;
  status: 'todo' | 'in-progress' | 'done';
};

export type ModalState = {
  name: string | null;
  modals: Modal[];
  payload: any;
  openModal: (name: string, payload?: any) => void;
  closeModal: () => void;
};
