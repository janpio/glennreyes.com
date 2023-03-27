import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { ActionLink } from '~/components/ui/elements/ActionLink';
import { Page } from '~/components/ui/layout/Page';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { H2 } from '~/components/ui/typography/H2';
import { getAllEvents } from '~/lib/events';
import { composeTitle } from '~/lib/metadata';
import { getWorkshopBySlug } from '~/lib/workshops';

export const revalidate = 3600;

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const workshop = await getWorkshopBySlug(params.slug);

  return {
    title: composeTitle(workshop.title),
  };
}

export async function generateStaticParams() {
  const allEvents = await getAllEvents();

  return allEvents.map((event) => ({ slug: event.slug }));
}

interface WorkshopPageParams {
  slug: string;
}

interface WorkshopPageProps {
  params: WorkshopPageParams;
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const workshop = await getWorkshopBySlug(params.slug);
  const events = workshop.appearances.map((appearance) => appearance.event);

  return (
    <Page>
      <Page.Header meta="Workshop">{workshop.title}</Page.Header>
      <Page.Body>
        <MDXRemoteContent source={workshop.abstract} />
        {events.length > 0 && (
          <>
            <H2>Appearances</H2>
            <AppearancesFeed events={events}>
              <ActionLink href="/appearances">All Appearances</ActionLink>
            </AppearancesFeed>
          </>
        )}
      </Page.Body>
    </Page>
  );
}