import type { LocalePrefixMode } from 'next-intl/routing'

const localePrefix: LocalePrefixMode = 'as-needed'

export const AppConfig = {
  name: 'Arnawa Digital Boilerplate',
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix
}
