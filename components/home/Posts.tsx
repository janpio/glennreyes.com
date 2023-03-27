import { allPosts } from '~/lib/posts';
import { ActionLink } from '../ui/elements/ActionLink';
import { Feed } from '../ui/layout/Feed';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <div className="grid gap-12">
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <Feed.Item date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
      <ActionLink href="/posts">All Posts</ActionLink>
    </div>
  );
}
