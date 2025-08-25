import { memo, type FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import type { IFormikField } from '@/shared/model/types';
import { PRIORITY_TASK_OPTIONS } from '@/features/addTask/model/contastants';

export const FormikField: FC<IFormikField> = memo(
  ({ name, label, placeholder, type = 'text', className, min, children }) => {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm mb-1">{label}</label>}

        {type === 'textarea' ? (
          <Field
            as="textarea"
            name={name}
            placeholder={placeholder}
            className={clsx('w-full border rounded-sm px-3 py-2 resize-none', className)}
          />
        ) : type === 'select' ? (
          <Field
            as="select"
            name={name}
            className={clsx('w-full border rounded-sm px-3 py-2', className)}
          >
            {PRIORITY_TASK_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Field>
        ) : type === 'date' ? (
          <Field
            type="date"
            name={name}
            min={min}
            className={clsx('w-full border rounded-sm px-3 py-2', className)}
          />
        ) : (
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={clsx('w-full border rounded-sm px-3 py-2', className)}
          />
        )}

        <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />

        {children && <div>{children}</div>}
      </div>
    );
  },
);
