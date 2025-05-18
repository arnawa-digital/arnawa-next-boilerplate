import { AppConfig } from '@/libs/core/config'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale
})
