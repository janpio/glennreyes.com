import { prisma } from '~/lib/prisma';

export function getAllTalks() {
  return prisma.talk.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      abstract: true,
      slug: true,
      title: true,
    },
  });
}

export function getTalkBySlug(slug: string) {
  return prisma.talk.findUniqueOrThrow({
    select: {
      abstract: true,
      appearances: {
        orderBy: {
          event: {
            startDate: 'desc',
          },
        },
        select: {
          event: {
            select: {
              location: {
                select: {
                  city: true,
                  country: true,
                  state: true,
                },
              },
              name: true,
              slug: true,
              startDate: true,
            },
          },
        },
      },
      slug: true,
      tags: true,
      title: true,
    },
    where: { slug },
  });
}
