import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router";

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
  // const [activeLink, setActiveLink] = useState("");
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
                      />
                    ))}
                    <li className="menu-item">
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/profil">Profil</NavLink>
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
