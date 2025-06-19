import Link from 'next/link'
import { categories } from '../data/urutans'

export const metadata = {
  title: 'Urutan Nonton Series, Anime, dan Film',
  description: 'Cari tahu urutan nonton terbaik untuk film, anime, dan series favoritmu.',
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Urutan Nonton Series, Anime, dan Film</h1>
      <p className="mb-6">Cari tahu urutan nonton terbaik untuk film, anime, dan series favoritmu.</p>
      <input
        type="text"
        placeholder="Cari..."
        className="w-full md:w-1/2 p-2 border rounded mb-6"
      />
      <h2 className="text-xl font-semibold mb-2">Kategori Populer</h2>
      <ul className="list-disc pl-5 space-y-2">
        {categories.map((item) => (
          <li key={item.slug}>
            <Link href={`/urutan/${item.slug}`} className="text-blue-600 hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
