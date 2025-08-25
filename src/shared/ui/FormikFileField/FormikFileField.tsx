import { type FC, useState } from 'react';
import { Field, ErrorMessage, type FormikProps } from 'formik';
import clsx from 'clsx';
import type { ITask } from '@/shared/model/types';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

export const FormikFileField: FC<Props> = ({ name, label, placeholder, className }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setFieldValue(name, base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      {label && <label className="block text-sm mb-1">{label}</label>}

      <Field name={name}>
        {({ form }: { form: FormikProps<ITask> }) => (
          <div>
            <input
              id={name}
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e, form.setFieldValue)}
            />
            <label
              htmlFor={name}
              className={clsx(
                'block w-full border rounded-sm px-3 py-2 cursor-pointer text-gray-500',
                className,
              )}
            >
              {fileName || placeholder || 'Оберіть файл...'}
            </label>
          </div>
        )}
      </Field>

      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};
