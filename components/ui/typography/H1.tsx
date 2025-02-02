import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, children, className, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';
  const classes = twMerge('text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tighter', className);

  return (
    <Component className={classes} {...props}>
      <span className="inline-block bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text pr-2 text-transparent dark:from-slate-50 dark:to-slate-400">
        {children}
      </span>
    </Component>
  );
}
