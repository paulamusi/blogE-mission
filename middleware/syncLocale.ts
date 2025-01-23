import { useI18n } from 'vue-i18n'

export default defineNuxtRouteMiddleware(() => {
  const { locale } = useI18n()
  const savedLocale = localStorage.getItem('locale') as 'en' | 'es' | null

  if (savedLocale) {
    locale.value = savedLocale
  }
})