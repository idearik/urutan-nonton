import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateStaticParams as getStaticParams, getUrutanBySlug } from '../../lib/urutan'

export const dynamicParams = false

export function generateStaticParams() {
  return getStaticParams()
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = getUrutanBySlug(params.slug)
  if (!data) return {}
  return {
    title: `${data.title} Terlengkap`,
    description: `Panduan lengkap ${data.title} berdasarkan tahun rilis dan alur cerita.`,
  }
}

export default function UrutanPage({ params }: { params: { slug: string } }) {
  const data = getUrutanBySlug(params.slug)
  if (!data) return notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <ul className="list-decimal pl-5 space-y-1 mb-4">
        {data.urutan.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>{data.deskripsi}</p>
    </div>
  )
}
