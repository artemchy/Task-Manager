import { type FC, type ButtonHTMLAttributes, type ReactNode, memo } from 'react';
import clsx from 'clsx';
import { buttonSchema } from './buttonSchema';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export const Button: FC<Props> = memo(
  ({ children, className, variant = 'primary', size = 'md', ...props }) => {
    return (
      <button {...props} className={clsx(buttonSchema({ intent: variant, size }), className)}>
        {children}
      </button>
    );
  },
);
