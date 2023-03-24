import type { LinkProps } from 'next/link';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Link } from '../elements/Link';

interface SocialLinkProps extends Omit<LinkProps, 'className'> {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
}

export function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="rounded-full p-2" rel="noreferrer noopener" target="_blank" {...props}>
      <Icon aria-hidden className="h-8 w-8" />
    </Link>
  );
}
