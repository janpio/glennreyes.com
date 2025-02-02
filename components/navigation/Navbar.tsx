import type { ComponentPropsWithoutRef } from 'react';
import { Avatar } from '../avatar/Avatar';
import { SkipNavigationLink } from '../ui/elements/SkipNavigationLink';
import { Container } from '../ui/layout/Container';
import { Link } from '../ui/link/Link';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarBorder } from './NavbarBorder';
import { ThemeSelect } from './ThemeSelect';

type NavbarProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;

export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30" {...props}>
      <div className="absolute inset-0 bg-white/95 supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:backdrop-blur-lg dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/50" />
      <NavbarBorder />
      <Container className="relative flex gap-2 py-1.5 md:gap-4 md:py-3">
        <div className="flex flex-1 shrink-0 items-center">
          <SkipNavigationLink />
          <div className="h-11 w-11">
            <NavbarAvatar>
              <Link className="block rounded-full focus-visible:ring-offset-2" href="/">
                <Avatar size={11} />
              </Link>
            </NavbarAvatar>
          </div>
        </div>
        {children}
        <div className="hidden flex-1 items-center justify-end md:grid">
          <ThemeSelect />
        </div>
      </Container>
    </header>
  );
}
