import * as Yup from 'yup';

const FILE_SCHEMA = Yup.string()
  .required("Файл обов'язковий")
  .test('fileSize', 'Файл завеликий (макс. 2MB)', (value) => {
    if (!value) return false;
    const sizeInBytes = Math.ceil((value.length * 3) / 4);
    return sizeInBytes <= 2 * 1024 * 1024; // 2MB
  })
  .test('fileType', 'Недопустимий формат', (value) => {
    if (!value) return false;
    return (
      value.startsWith('data:image/jpeg') ||
      value.startsWith('data:image/png') ||
      value.startsWith('data:application/pdf')
    );
  });

export const CREATE_TASK_SCHEMA = Yup.object().shape({
  title: Yup.string().required('Назва обов’язкова'),
  description: Yup.string().required('Опис обов’язковий'),
  priority: Yup.string().oneOf(['Маленький', 'Середній', 'Високий']),
  deadline: Yup.date().required('Вкажіть термін'),
  file: FILE_SCHEMA,
});
