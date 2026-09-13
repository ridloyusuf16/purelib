import { useState } from "react"
import TabContent from "./PopularTabContent"

const genres = [
  {id: 'all', name: 'Semua'},
  {id: 'novel', name: 'Novel'},
  {id: 'self-improvement', name: 'Pengembangan Diri'},
  {id: 'technology', name: 'Teknologi'},
  {id: 'history', name: 'Sejarah'}
]

let id = 0
const books = [
  {id: id++, title: "Max Havelaar", author: "Multatuli", price: 135, image: 'tab-item1.jpg', genre: 'novel'},
  {id: id++, title: "Bumi", author: "Tere Liye", price: 110, image: 'tab-item2.jpg', genre: 'novel'},
  {id: id++, title: "Atomic Habits", author: "James Clear", price: 125, image: 'tab-item3.jpg', genre: 'self-improvement'},
  {id: id++, title: "Filosofi Teras", author: "Henry Manampiring", price: 40, image: 'tab-item4.jpg', genre: 'self-improvement'},
  {id: id++, title: "Basis Data", author: "Priyanto", price: 140, image: 'tab-item5.jpg', genre: 'technology'},
  {id: id++, title: "Java OOP", author: "Izuddin Mahali", price: 40, image: 'tab-item6.jpg', genre: 'technology'},
  {id: id++, title: "Pararaton", author: "Johan M", price: 40, image: 'tab-item7.jpg', genre: 'history'},
  {id: id++, title: "Pulang", author: "Leila S. Chudori", price: 40, image: 'tab-item8.jpg', genre: 'history'},
]

export default function PopularSection() {
  const [activeGenre, setActiveGenre] = useState("all")

  function handleTabClick(genre){
    setActiveGenre(genre)
  }
  return (
    <section id="popular-books" className="bookshelf py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header align-center">
              <div className="title">
                <span>Baca Koleksi Buku Kami</span>
              </div>
              <h2 className="section-title">Koleksi Buku</h2>
            </div>
            <ul className="tabs">
              {
                genres.map((genre) => (
                  <li key={genre.id} data-tab-target={`#${genre.id}`} className={activeGenre === genre.id ? 'active tab' : 'tab'} onClick={() => handleTabClick(genre.id)}> 
                  {genre.name}
                  </li>
                ))
              }
            </ul>
            <div className="tab-content">
              <TabContent books={books} genres={genres} activeGenre={activeGenre} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
