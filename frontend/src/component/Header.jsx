import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const menus = [
  { id: "home", name: "Beranda" },
  // {id: 'featured-books', name: 'Featured'},
  { id: "popular-books", name: "Koleksi" },
  // {id: 'special-offer', name: 'Promo'},
  { id: "latest-blog", name: "Artikel" },
  // {id: 'download-app', name: 'Download App'}
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="header-wrap">
      {/* <div className="top-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-youtube-play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-behance-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-element">
                <a href="#" className="user-account for-buy">
                  <i className="icon icon-user" />
                  <span>Account</span>
                </a>
                <a href="#" className="cart for-buy">
                  <i className="icon icon-clipboard" />
                  <span>Cart:(0 $)</span>
                </a>
                <div className="action-menu">
                  <div className="search-bar">
                    <a
                      href="#"
                      className="search-button search-toggle"
                      data-selector="#header-wrap"
                    >
                      <i className="icon icon-search" />
                    </a>
                    <form role="search" method="get" className="search-box">
                      <input
                        className="search-field text search-input"
                        placeholder="Search"
                        type="search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <header id="header" className={`${isScrolled ? "fixed-top" : ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="main-logo">
                <a href="index.html">
                  <img src="src/assets/images/purelib-logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-10">
              <nav id="navbar">
                <div className="main-menu stellarnav">
                  <a href="#" className="menu-toggle full">
                    <span className="bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </a>
                  <ul className={`menu-list ${isOpen ? "open" : ""}`}>
                    {menus.map((menu) => (
                      <MenuItem
                        key={menu.id}
                        menu={menu}
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                      />
                    ))}
                    <li className="menu-item">
                      <a href="#" className="nav-link">
                        Cart
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">
                        Profil
                      </a>
                    </li>
                  </ul>
                  <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
