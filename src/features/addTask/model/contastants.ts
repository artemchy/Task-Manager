export const CREATE_TASK_INITIAL = {
  title: '',
  description: '',
  priority: 'Середній',
  deadline: '',
  file: '',
  assignee: '',
} as const;

export const PRIORITY_TASK_OPTIONS = [
  { value: 'Маленький', label: 'Маленький' },
  { value: 'Середній', label: 'Середній' },
  { value: 'Високий', label: 'Високий' },
] as const;

export const USERS_MOCK = [
  { id: '1', name: 'Артем' },
  { id: '2', name: 'Віталій' },
  { id: '3', name: 'Андрій' },
];
