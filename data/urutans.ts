export interface Urutan {
  title: string
  slug: string
  urutan: string[]
  deskripsi: string
}

export const urutanData: Record<string, Urutan> = {
  'harry-potter': {
    title: 'Urutan Nonton Harry Potter',
    slug: 'harry-potter',
    urutan: [
      "Harry Potter and the Philosopher's Stone (2001)",
      'Harry Potter and the Chamber of Secrets (2002)',
      'Harry Potter and the Prisoner of Azkaban (2004)',
      'Harry Potter and the Goblet of Fire (2005)',
      'Harry Potter and the Order of the Phoenix (2007)',
      'Harry Potter and the Half-Blood Prince (2009)',
      'Harry Potter and the Deathly Hallows – Part 1 (2010)',
      'Harry Potter and the Deathly Hallows – Part 2 (2011)',
    ],
    deskripsi:
      'Harry Potter adalah seri film fantasi berdasarkan novel karya J.K. Rowling. Urutan nonton terbaik adalah berdasarkan tahun rilis.',
  },
  naruto: {
    title: 'Urutan Nonton Naruto',
    slug: 'naruto',
    urutan: [
      'Naruto (2002)',
      'Naruto Shippuden (2007)',
      'Boruto: Naruto Next Generations (2017)',
    ],
    deskripsi:
      'Naruto mengikuti perjalanan ninja Uzumaki Naruto. Disarankan menonton berdasarkan urutan rilis untuk memahami perkembangan karakter.',
  },
  'kimetsu-no-yaiba': {
    title: 'Urutan Nonton Kimetsu no Yaiba',
    slug: 'kimetsu-no-yaiba',
    urutan: [
      'Kimetsu no Yaiba Season 1 (2019)',
      'Kimetsu no Yaiba Movie: Mugen Train (2020)',
      'Kimetsu no Yaiba Season 2 (2021)',
      'Kimetsu no Yaiba Season 3 (2023)',
    ],
    deskripsi:
      'Serial ini bercerita tentang perjuangan Tanjiro melawan iblis. Ikuti urutan rilis untuk pengalaman terbaik.',
  },
  'fate-series': {
    title: 'Urutan Nonton Fate Series',
    slug: 'fate-series',
    urutan: [
      'Fate/Zero (2011)',
      'Fate/stay night: Unlimited Blade Works (2014)',
      'Fate/stay night: Heaven\'s Feel (2017)',
    ],
    deskripsi:
      'Fate Series memiliki banyak jalur cerita. Urutan di atas mengikuti kronologi rilis yang populer.',
  },
}

export const categories = Object.values(urutanData).map(({ title, slug }) => ({
  title,
  slug,
}))
