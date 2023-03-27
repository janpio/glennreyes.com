import { queryAllEvents } from '~/lib/events';
import { getPlaceByLocation } from '~/lib/place';
import { Feed } from '../ui/layout/Feed';

export async function AppearancesFeed() {
  const allEvents = await queryAllEvents();
  const today = new Date();
  const upcoming = allEvents.filter((event) => event.startDate > today);
  const past = allEvents.filter((event) => event.startDate <= today);

  return (
    <>
      {upcoming.length > 0 && (
        <Feed title="Upcoming">
          {upcoming.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={getPlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
      {past.length && (
        <Feed title="Past">
          {past.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={getPlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
    </>
  );
}
