import defaultSettings from '@/settings'

const title = defaultSettings.title || '新兴铸管'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
