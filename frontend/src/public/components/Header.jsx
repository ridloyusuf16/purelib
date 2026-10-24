import { useState } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider
} from "flowbite-react";
import { customTheme } from "../../assets/js/theme.js";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <ThemeProvider theme={customTheme}>
      <Navbar fluid rounded className="border-b border-brand-light !px-20">
        <NavbarBrand href="#">
          <img src="/purelib-logo.png" className="mr-3 h-6 sm:h-9" alt="Purelib Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PureLib</span> */}
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Muhammad Yusuf Ridlo</span>
              <span className="block truncate text-sm font-medium">yusufridlo16@gmail.com</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Cart</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#hero" active={activeLink === "Home"} onClick={() => setActiveLink("Home")}>
            Beranda
          </NavbarLink>
          <NavbarLink href="#collection" active={activeLink === "Collection"} onClick={() => setActiveLink("Collection")}>
            Koleksi
          </NavbarLink>
          <NavbarLink href="#article" active={activeLink === "Article"} onClick={() => setActiveLink("Article")}>
            Artikel
          </NavbarLink>
          <NavbarLink href="#notes" active={activeLink === "Notes"} onClick={() => setActiveLink("Notes")}>
            Catatan
          </NavbarLink>
          <NavbarLink href="#cta" active={activeLink === "Contact"} onClick={() => setActiveLink("Contact")}>
            Kontak
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}
