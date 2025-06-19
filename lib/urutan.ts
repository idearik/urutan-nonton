import { urutanData } from '../data/urutans'

export function getUrutanBySlug(slug: string) {
  return urutanData[slug]
}

export function generateStaticParams() {
  return Object.keys(urutanData).map((slug) => ({ slug }))
}
