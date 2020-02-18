import defaultSettings from '@/settings'

const title = defaultSettings.title || '凡云API'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
