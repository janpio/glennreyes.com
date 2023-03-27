import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { Link } from '~/components/ui/elements/Link';
import { H1 } from '~/components/ui/typography/H1';
import { H2 } from '~/components/ui/typography/H2';
import { H3 } from '~/components/ui/typography/H3';
import { H4 } from '~/components/ui/typography/H4';
import { Lead } from '~/components/ui/typography/Lead';

export const components: MDXComponents = {
  Image,
  Lead,
  a: ({ href, ...props }) => (href ? <Link href={href} {...props} /> : null),
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  pre: (props) => <pre className="rounded-[1.75rem] p-6" {...props} />,
};
