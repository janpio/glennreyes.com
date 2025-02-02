import { AppearancesFeed } from '@/components/appearances/AppearancesFeed';
import { Page } from '@/components/ui/layout/Page';
import { getAllEvents } from '@/lib/events';

export const revalidate = 3600;

export const metadata = {
  title: 'Appearances',
  x: {
    title: 'Appearances',
  },
};

export default async function AppearancesPage() {
  const allEvents = await getAllEvents();

  return (
    <Page>
      <Page.Header lead="Discover where I'm making an impact in the tech community through my speaking and teaching engagements.">
        Appearances.
      </Page.Header>
      <Page.Body>
        <AppearancesFeed events={allEvents} />
      </Page.Body>
    </Page>
  );
}
