import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  const classes = twMerge(
    'rounded-2xl border border-stone-300 py-3 px-5 text-left text-sm font-medium text-stone-600 transition placeholder:text-stone-300 focus:border-stone-400 focus:text-stone-700 focus:ring-4 focus:ring-teal-100 disabled:bg-stone-50',
    className,
  );

  return <input className={classes} {...props} />;
}