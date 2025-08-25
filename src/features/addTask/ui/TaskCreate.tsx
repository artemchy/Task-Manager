import { Modal } from '@/shared/ui/Modal/Modal';
import { Formik, Form } from 'formik';
import { memo, type FC } from 'react';
import { CREATE_TASK_SCHEMA } from '../model/schema';
import { FormikFileField } from '@/shared/ui/FormikFileField/FormikFileField';
import { NEXT_DAY } from '@/shared/lib/utils';
import { FormikField } from '@/shared/ui/FormikField/FormikField';
import { CREATE_TASK_INITIAL } from '../model/contastants';
import { useTaskStore, useUserStore } from '@/entities/task/model/taskStore';
import { useModalStore } from '@/shared/model/commonStore';

export const TaskCreate: FC<{ onClose: () => void }> = memo(({ onClose }) => {
  const { openModal } = useModalStore();
  const addTask = useTaskStore((state) => state.addTask);
  const selectedUser = useUserStore((state) => state.selectedUser);

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Створити Задачу</h2>

      <Formik
        initialValues={CREATE_TASK_INITIAL}
        validationSchema={CREATE_TASK_SCHEMA}
        onSubmit={(values, { resetForm }) => {
          addTask({
            id: Date.now().toString(),
            title: values.title,
            description: values.description,
            priority: values.priority,
            deadline: values.deadline,
            file: values.file,
            assignee: selectedUser ?? null,
            status: 'todo',
          });
          resetForm();
          onClose();
        }}
      >
        {() => (
          <Form className="space-y-3">
            <FormikField name="title" placeholder="Назва" />
            <FormikField name="description" placeholder="Опис" type="textarea" />
            <FormikField name="priority" label="Пріоритет" type="select" />
            <FormikField name="deadline" label="Термін" type="date" min={NEXT_DAY} />

            <FormikFileField name="file" label="Файл" placeholder="Оберіть файл..." />

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">
                Виконавець: {selectedUser ? selectedUser.name : 'Не обрано'}
              </span>
              <button
                type="button"
                onClick={() => openModal('user')}
                className="text-blue-600 underline"
              >
                Вибери виконавця
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-sm hover:bg-blue-700"
            >
              Створити
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
});
