const books = [
  { title: "Max Havelaar", author: "Multatuli", genre: "Sastra", cover: "bg-[#d7c3a2]", ink: "text-[#433625]" },
  { title: "Bumi", author: "Tere Liye", genre: "Novel", cover: "bg-[#183c43]", ink: "text-[#f4e8cf]" },
  { title: "Atomic Habits", author: "James Clear", genre: "Pengembangan diri", cover: "bg-[#c95f3b]", ink: "text-[#fff3d9]" },
  { title: "Filosofi Teras", author: "Henry Manampiring", genre: "Filsafat", cover: "bg-[#d6d4c2]", ink: "text-[#314f47]" }
];

const articles = [
  { category: "Filsafat", date: "12 Okt 2026", title: "Mengapa Membaca Filsafat Politik?", excerpt: "Tentang gagasan keadilan, kekuasaan, dan bagaimana kita hidup bersama." },
  { category: "Kebiasaan", date: "4 Okt 2026", title: "Membaca Sedikit, Memahami Lebih Dalam", excerpt: "Catatan kecil tentang membangun hubungan yang lebih bermakna dengan buku." },
  { category: "Sejarah", date: "28 Sep 2026", title: "Sejarah sebagai Cara Memahami Hari Ini", excerpt: "Melihat masa lalu bukan untuk tinggal di sana, melainkan untuk membaca masa kini." }
];

const interests = ["Filsafat", "Sejarah", "Pendidikan", "Teknologi", "Keislaman", "Manajemen"];

export default function Home() {
  return (
    <main className="overflow-hidden bg-brand-background text-brand-dark">
      <section id="hero" className="relative !px-20 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              Perpustakaan pribadi
            </p>
            <h1 className="max-w-3xl text-6xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Pure
              <span className="text-brand-primary">Lib.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Perpustakaan pribadi Muhammad Yusuf Ridlo. Sebuah ruang digital untuk mengarsipkan buku, catatan bacaan, resensi, dan gagasan yang lahir dari proses belajar sepanjang hayat.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#collection" className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
                Jelajahi koleksi <span aria-hidden="true">↗</span>
              </a>
              <a href="#article" className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand-primary hover:text-brand-primary">
                Baca tulisan <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2" aria-hidden="true">
                {["bg-[#0D1B2A]", "bg-[#1B998B]", "bg-[#52BCA3]"].map((color) => (
                  <span key={color} className={`h-9 w-9 rounded-full border-[3px] border-brand-background ${color}`} />
                ))}
              </div>
              <p><span className="font-semibold text-brand-dark">Belajar, mencatat, berbagi.</span><br />Satu halaman demi halaman.</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e2b48c]/40 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-brand-secondary/30 blur-2xl" />
            <div className="relative min-h-[410px] overflow-hidden rounded-[2rem] bg-[#0D1B2A] p-8 shadow-2xl shadow-brand-dark/15 sm:min-h-[470px] sm:p-12">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#e8dec7 0.7px, transparent 0.7px)", backgroundSize: "15px 15px" }} />
              <div className="relative flex h-full min-h-[345px] items-center justify-center">
                <div className="absolute left-[8%] top-[18%] hidden h-56 w-40 -rotate-12 rounded-md bg-[#c95f3b] p-5 text-[#fff3d9] shadow-xl sm:block">
                  <span className="text-[9px] uppercase tracking-[0.25em]">James Clear</span>
                  <p className="mt-12 text-2xl font-semibold leading-tight">Atomic<br />Habits</p>
                  <span className="mt-4 block h-px w-8 bg-[#fff3d9]/70" />
                </div>
                <div className="absolute right-[9%] top-[19%] hidden h-56 w-40 rotate-[10deg] rounded-md bg-[#d7c3a2] p-5 text-[#433625] shadow-xl sm:block">
                  <span className="text-[9px] uppercase tracking-[0.25em]">Multatuli</span>
                  <p className="mt-12 text-2xl font-semibold">Max<br />Havelaar</p>
                  <span className="mt-4 block h-px w-8 bg-[#433625]/50" />
                </div>
                <div className="relative z-10 flex h-64 w-48 -rotate-2 flex-col rounded-md bg-[#1c6a34] p-6 text-[#fff3d9] shadow-2xl shadow-black/30 sm:h-72 sm:w-52">
                  <span className="text-[9px] uppercase tracking-[0.25em]">Leila S. Chudori</span>
                  <div className="my-auto">
                    {/* <div className="mb-3 h-1 w-8 bg-brand-primary" /> */}
                    <p className="text-3xl font-semibold leading-tight">Pulang</p>
                    {/* <p className="mt-3 text-xs tracking-wide text-[#64746b]">Buku · ide · kehidupan</p> */}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em]">Perpustakaan Ridlo</span>
                </div>
                <div className="absolute bottom-5 left-1/2 z-20 w-[85%] -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:w-[78%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/65">Sedang dibaca</p>
                      <p className="mt-1 font-medium">Wasathiyah Islam <span className="block text-white/60 text-xs">M. Kholid Syerazi</span></p>
                    </div>
                    <span className="rounded-full bg-[#1B998B] px-3 py-1.5 text-xs font-medium text-[#E6ECEF]">68%</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[68%] rounded-full bg-[#1B998B]" />
                  </div>
                </div>
              </div>
              <div className="absolute right-6 top-6 rounded-full border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#1B998B] bg-[#E6ECEF]">Est. 2023</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#e9eae8] bg-white !px-20 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Tentang <span className="block">perpustakaan</span></p>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-700">
            Katalog pribadi sekaligus ruang publik untuk berbagi refleksi dan kajian dari berbagai bidang—karena setiap buku bisa menjadi awal dari sebuah percakapan.
          </p>
        </div>
      </section>

      <section id="statistic" className="!px-20 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-3xl bg-[#eaf0eb] p-6 sm:grid-cols-4 sm:p-9">
          {[["876", "Buku dalam koleksi"], ["421", "Penulis"], ["25", "Bidang minat"], ["503", "Sudah dibaca"]].map(([value, label]) => (
            <div key={label} className="border-slate-300/70 px-3 py-3 sm:border-r last:border-0">
              <p className="text-3xl font-semibold text-brand-primary sm:text-4xl">{value}<span className="text-xl">+</span></p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>
{/* 
      <section id="collection" className="px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Dari rak ke rak</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Koleksi terbaru</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">Beberapa judul yang baru singgah di perpustakaan dan siap menemani waktu luangmu.</p>
            </div>
            <a href="#collection" className="text-sm font-semibold text-brand-primary hover:text-brand-dark">Lihat semua koleksi <span aria-hidden="true">↗</span></a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {books.map((book, index) => (
              <article key={book.title} className="group">
                <div className={`relative flex aspect-[4/5] flex-col overflow-hidden rounded-2xl ${book.cover} p-5 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:p-7`}>
                  <span className={`text-[9px] uppercase tracking-[0.2em] ${book.ink}`}>{book.genre}</span>
                  <div className="my-auto">
                    <span className={`mb-3 block h-1 w-8 ${index === 1 ? "bg-[#d2ae73]" : "bg-current opacity-40"}`} />
                    <h3 className={`font-serif text-2xl font-semibold leading-tight sm:text-3xl ${book.ink}`}>{book.title}</h3>
                    <p className={`mt-2 text-xs ${book.ink} opacity-75`}>{book.author}</p>
                  </div>
                  <span className={`text-[9px] uppercase tracking-[0.18em] ${book.ink} opacity-60`}>Koleksi pribadi</span>
                </div>
                <div className="px-1 pt-3">
                  <p className="text-sm font-semibold">{book.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{book.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ongoing" className="bg-[#eaf0eb] px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Jeda sejenak, lanjut membaca</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Sedang dibaca</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Tidak semua buku harus ditamatkan dengan cepat. Ini beberapa teman baca yang sedang menemani hari-hari.</p>
            <a href="#collection" className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-brand-dark">Temukan bacaan berikutnya <span className="ml-2">→</span></a>
          </div>
          <div className="space-y-3">
            {[["The Republic", "Plato", 68, "bg-[#183c43]"], ["Deep Work", "Cal Newport", 42, "bg-[#c95f3b]"], ["Sejarah Tuhan", "Karen Armstrong", 25, "bg-[#d7c3a2]"]].map(([title, author, progress, cover]) => (
              <article key={title} className="flex items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 sm:gap-6 sm:p-5">
                <div className={`hidden h-20 w-14 shrink-0 rounded-md ${cover} shadow-sm sm:block`} aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div><h3 className="font-serif text-lg font-semibold">{title}</h3><p className="mt-1 text-sm text-slate-500">{author}</p></div>
                    <span className="text-sm font-semibold text-brand-primary">{progress}% selesai</span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-brand-primary" style={{ width: `${progress}%` }} /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="article" className="px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Dari meja baca</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Tulisan terbaru</h2>
            </div>
            <a href="#article" className="text-sm font-semibold text-brand-primary hover:text-brand-dark">Semua tulisan <span aria-hidden="true">↗</span></a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <article key={article.title} className={`flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ${index === 0 ? "md:bg-[#f0f4ef]" : ""}`}>
                <div className="flex items-center justify-between text-xs text-slate-500"><span className="rounded-full bg-brand-primary/10 px-3 py-1.5 font-medium text-brand-primary">{article.category}</span><time>{article.date}</time></div>
                <h3 className="mt-7 font-serif text-xl font-semibold leading-snug">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{article.excerpt}</p>
                <a href="#article" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-dark">Baca selengkapnya <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="border-y border-[#e6e9e4] bg-white px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Garis bawah dan halaman bertanda</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Catatan bacaan</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">Potongan gagasan yang ingin disimpan lebih lama setelah halaman terakhir ditutup.</p>
            <article className="mt-7 rounded-2xl bg-[#f3f5f1] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">5 insight penting</span><span className="text-xs text-slate-400">6 menit baca</span></div>
              <h3 className="mt-4 font-serif text-xl font-semibold">Thinking, Fast and Slow</h3>
              <p className="mt-1 text-sm text-slate-500">Daniel Kahneman</p>
              <p className="mt-4 border-l-2 border-brand-secondary pl-4 text-sm italic leading-7 text-slate-600">“Pikiran kita punya dua cara untuk memahami dunia: cepat dan intuitif, atau lambat dan penuh pertimbangan.”</p>
              <a href="#notes" className="mt-5 inline-flex text-sm font-semibold text-brand-primary">Buka catatan <span className="ml-2">→</span></a>
            </article>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Setelah halaman terakhir</p><h2 className="mt-3 font-serif text-3xl font-semibold">Resensi</h2></div>
              <a href="#notes" className="text-sm font-semibold text-brand-primary">Semua resensi ↗</a>
            </div>
            <article className="mt-7 flex gap-5 rounded-2xl border border-slate-200 p-5 sm:gap-7 sm:p-7">
              <div className="hidden h-44 w-32 shrink-0 rounded-xl bg-[#c95f3b] p-4 text-[#fff3d9] sm:flex sm:flex-col sm:justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em]">Sejarah</span><span className="font-serif text-2xl font-semibold leading-tight">Sapiens</span><span className="text-[9px]">Yuval Noah Harari</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">Resensi buku</span>
                <h3 className="mt-3 font-serif text-xl font-semibold">Sapiens: Sebuah Sejarah Umat Manusia</h3>
                <p className="mt-2 text-sm text-slate-500">Yuval Noah Harari · 8 menit baca</p>
                <p className="mt-4 flex gap-1 text-amber-500" aria-label="4 dari 5 bintang"><span>★★★★</span><span className="text-slate-300">★</span></p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">Perjalanan ringkas tentang bagaimana cerita, kerja sama, dan imajinasi membentuk peradaban manusia.</p>
                <a href="#notes" className="mt-4 text-sm font-semibold text-brand-primary">Baca resensi <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="interests" className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Peta ketertarikan</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Bidang yang dijelajahi</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {interests.map((interest, index) => (
              <a key={interest} href="#collection" className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-primary hover:bg-[#edf4ef]">
                <span className="font-serif text-xl text-brand-primary opacity-60">0{index + 1}</span>
                <h3 className="mt-5 text-sm font-semibold group-hover:text-brand-primary">{interest}</h3>
                <span className="mt-4 block text-sm text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-primary">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="px-6 py-8 sm:px-8 sm:py-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#163a36] px-7 py-12 text-center text-white sm:px-16 sm:py-16">
          <span className="absolute -left-4 -top-20 font-serif text-[15rem] leading-none text-white/[0.04]" aria-hidden="true">“</span>
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#a8cdbb]">Kutipan pilihan</p>
          <blockquote className="relative mx-auto mt-6 max-w-3xl font-serif text-2xl leading-relaxed sm:text-4xl">
            “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”
          </blockquote>
          <p className="relative mt-6 text-sm text-white/65">— Aristoteles</p>
        </div>
      </section>

      <section id="garden" className="px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Ide saling bertaut</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Sebuah knowledge garden</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">Buku menumbuhkan catatan. Catatan berkembang menjadi gagasan yang bisa dibagikan.</p>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">Buku · Plato</span>
              <h3 className="mt-3 font-serif text-xl font-semibold">The Republic</h3>
              <p className="mt-2 text-sm text-slate-500">Pertanyaan tentang keadilan</p>
            </article>
            <span className="rotate-90 text-2xl text-brand-secondary md:rotate-0" aria-hidden="true">→</span>
            <article className="rounded-2xl border border-brand-primary/20 bg-[#edf4ef] p-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">Catatan bacaan</span>
              <h3 className="mt-3 font-serif text-xl font-semibold">Apa itu negara yang adil?</h3>
              <p className="mt-2 text-sm text-slate-500">Gagasan, kutipan, dan pertanyaan</p>
            </article>
            <span className="rotate-90 text-2xl text-brand-secondary md:rotate-0" aria-hidden="true">→</span>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">Tulisan</span>
              <h3 className="mt-3 font-serif text-xl font-semibold">Membayangkan negara ideal</h3>
              <p className="mt-2 text-sm text-slate-500">Dari dialog Plato ke dunia hari ini</p>
            </article>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-[#eaf0eb] px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Pintu selalu terbuka</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Temukan ide yang ingin kamu bawa pulang.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Jelajahi koleksi buku, catatan, dan tulisan yang membentuk perjalanan intelektual saya.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="#collection" className="rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark">Lihat katalog <span aria-hidden="true">↗</span></a>
            <a href="#article" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-brand-primary hover:text-brand-primary">Baca artikel <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
