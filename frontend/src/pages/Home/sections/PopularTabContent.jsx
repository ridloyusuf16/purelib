import Tab from "./PopularTab";

export default function PopularTabContent({ books, genres, activeGenre }) {
  let filteredBooks = [];
  
  if (activeGenre === "all") {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter((book) => book.genre === activeGenre);
  }

  return (
    <>
      {genres.map((genre) => (
        <div
          key={genre.id}
          id={genre.id}
          data-tab-content=""
          className={activeGenre === genre.id ? "active" : ""}
        >
          <div className="row">
            {filteredBooks.map((book) => (
              <div key={book.id} className="col-md-3">
                <Tab book={book} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
