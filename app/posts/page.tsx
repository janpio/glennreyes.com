import type { Metadata } from 'next';
import { PostsFeed } from '@/components/posts/PostsFeed';
import { Page } from '@/components/ui/layout/Page';

export const metadata: Metadata = {
  title: 'Posts',
};

export default function PostsPage() {
  return (
    <Page>
      <Page.Header lead="Where I share my insights on the intersection of code and life through thought-provoking written articles.">
        Writing on code and life.
      </Page.Header>
      <Page.Body>
        <PostsFeed />
      </Page.Body>
    </Page>
  );
}
