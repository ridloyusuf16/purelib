import { useEffect, useRef, useState } from "react";
import TabContent from "./PopularTabContent";

export default function PopularSection() {
  const [activeGenre, setActiveGenre] = useState("all");
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const loaded = useRef(false);

  function handleTabClick(genre) {
    setActiveGenre(genre);
  }

  useEffect(() => {
    if (loaded.current == false) {
      Promise.all([
        fetch("/books.json").then((response) => response.json()),
        fetch("/genres.json").then((response) => response.json()),
      ])
        .then(([bookData, genreData]) => {
          setBooks(bookData)
          setGenres(genreData)
        })
        .then(() => loaded.current = true)
        .catch((error) => console.log(`Gagal memuat data: ${error}`))
    }

    return () => {
      console.log("Book List Component Unmounted");
    };
  }, []);

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
              {genres.map((genre) => (
                <li
                  key={genre.id}
                  data-tab-target={`#${genre.id}`}
                  className={activeGenre === genre.id ? "active tab" : "tab"}
                  onClick={() => handleTabClick(genre.id)}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className="tab-content">
              <TabContent
                books={books}
                genres={genres}
                activeGenre={activeGenre}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
