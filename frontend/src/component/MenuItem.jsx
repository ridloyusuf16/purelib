export default function MenuItem({ menu, activeLink, setActiveLink }) {
  return (
    <li
      className={`menu-item ${menu.subMenu ? "has-sub" : ""} ${activeLink === menu.id ? "active" : ""}`}
      onClick={() => setActiveLink(menu.id)}
    >
      <a href={`#${menu.id}`} className="nav-link">
        {menu.name}
      </a>
    </li>
  );
}
