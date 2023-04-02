'use client';

import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import photo from '~/assets/images/photo.jpg';
import { name } from '~/lib/constants';

type AvatarSize = 11 | 40;

const sizes: Record<AvatarSize, Pick<ComponentPropsWithoutRef<typeof Image>, 'className' | 'height' | 'width'>> = {
  11: {
    className: 'h-11 w-11',
    height: 44,
    width: 44,
  },
  40: {
    className: 'h-40 w-40',
    height: 160,
    width: 160,
  },
};

interface AvatarProps
  extends Omit<ComponentPropsWithoutRef<typeof Image>, 'alt' | 'height' | 'placeholder' | 'src' | 'width'> {
  size?: AvatarSize;
}

export function Avatar({ className, size = 40, ...props }: AvatarProps) {
  const { className: sizeClasses, ...sizeAttributes } = sizes[size];
  const classes = twMerge('rounded-full [view-transition-name:avatar]', sizeClasses, className);

  return <Image alt={name} className={classes} placeholder="blur" src={photo} {...sizeAttributes} {...props} />;
}
