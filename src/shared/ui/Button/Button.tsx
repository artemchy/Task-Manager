import { type FC, type ButtonHTMLAttributes, type ReactNode, memo } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export const Button: FC<Props> = memo(
  ({ children, className, variant = 'primary', size = 'md', ...props }) => {
    const buttonClass = clsx(
      'rounded-sm shadow transition cursor-pointer font-medium',
      {
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        'px-3 py-1 text-sm': size === 'sm',
        'px-4 py-2 text-base': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
      },
      className,
    );

    return (
      <button {...props} className={buttonClass}>
        {children}
      </button>
    );
  },
);
