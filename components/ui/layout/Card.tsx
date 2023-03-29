import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { DateDisplay } from '../elements/DateDisplay';
import { Link } from '../elements/Link';

export type CardProps<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'article' | 'div' | 'section'>;
};

export function Card<TElementType extends ElementType>({ as, ...props }: CardProps<TElementType>) {
  const Component = as ?? 'div';

  return <Component className="relative rounded-[1.75rem] border border-slate-100 p-6" {...props} />;
}

interface CardBodyProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'title'> {
  title?: string;
}

function CardBody({ children, title, ...props }: CardBodyProps) {
  return (
    <div className="grid gap-4" {...props}>
      {title && <p className="text-xs font-bold uppercase text-teal-700/90">{title}</p>}
      {children}
    </div>
  );
}

Card.Body = CardBody;

type CardItemWithDateProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  children?: ReactNode;
  date: Date | string;
  description: string;
  link?: string;
  meta?: undefined;
  title: string;
};

type CardItemWithMetaProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  children?: ReactNode;
  date?: undefined;
  description?: string;
  link?: string;
  meta?: ReactNode;
  title: string;
};

type CardItemProps = CardItemWithDateProps | CardItemWithMetaProps;

function CardItem({ children, description, link, title, ...rest }: CardItemProps) {
  const itemClasses = clsx(link && 'group relative', 'grid gap-1');
  const descriptionClasses = clsx(link && 'relative z-10', 'text-sm text-slate-500');
  const metaClasses = clsx(link && 'relative z-10', 'text-sm text-slate-400');
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };

  return (
    <div className={itemClasses} {...props}>
      {date === undefined ? (
        <div className={metaClasses}>{meta}</div>
      ) : (
        <DateDisplay className={metaClasses} value={date} />
      )}
      <h3 className="text-sm font-medium tracking-tight">
        {link ? (
          <Link href={link}>
            <span className="absolute -inset-x-6 -inset-y-2 z-20" />
            <span className="relative z-10">{title}</span>
          </Link>
        ) : (
          title
        )}
      </h3>
      {description && <p className={descriptionClasses}>{description}</p>}
      {children}
      {link && (
        <div className="absolute -inset-x-6 -inset-y-2 scale-95 bg-slate-50/50 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
      )}
    </div>
  );
}

Card.Item = CardItem;
