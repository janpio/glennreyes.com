import type { ResolvedTheme } from './theme';

const forms: Record<ResolvedTheme, number> = {
  dark: 4917152,
  light: 4917153,
};
const publicApiKey = 'lQbg_unCgg3LrJVBjnboyA';

export interface SubscribeData {
  email: string;
  theme: ResolvedTheme;
}

export function subscribe({ email, theme }: SubscribeData) {
  return fetch(`https://api.convertkit.com/v3/forms/${forms[theme]}/subscribe`, {
    body: JSON.stringify({ api_key: publicApiKey, email }),
    headers: { 'content-type': 'application/json' },
    method: 'post',
  });
}
