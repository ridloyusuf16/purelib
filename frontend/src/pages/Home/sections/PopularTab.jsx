export default function PopularTab({ book }) {
  return (
    <div className="product-item">
      <figure className="product-style">
        <img
          src={`src/assets/images/${book.image}`}
          alt="Books"
          className="product-item"
        />
        {/* <button
          type="button"
          className="add-to-cart"
          data-product-tile="add-to-cart"
        >
          Add to Cart
        </button> */}
      </figure>
      <figcaption>
        <h3>{book.title}</h3>
        <span>{book.author}</span>
        <div className="item-price">{book.price}</div>
      </figcaption>
    </div>
  );
}
