import { NavLink } from "react-router";

export default function MenuItem({ menu }) {
  return (
    <li className="menu-item">
      <NavLink to={{ 
        pathname: "/",
        hash: `${menu.id === "home" ? "#billboard" : `#${menu.id}`}`
       }}>{menu.name}</NavLink>
    </li>
  );
}
