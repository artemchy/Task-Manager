import { tv } from 'tailwind-variants';

export const buttonSchema = tv({
  base: 'rounded-sm shadow transition cursor-pointer font-medium',
  variants: {
    intent: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 duration-600 ease-out',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 duration-600 ease-out',
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
