import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { subscribe } from '@/lib/newsletter';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = z.object({ email: z.string(), theme: z.enum(['dark', 'light']).default('light') }).safeParse(data);

  if (!result.success) {
    return new NextResponse('Invalid email', { status: 400 });
  }

  await subscribe(result.data);

  return new NextResponse('OK', { status: 200 });
}
