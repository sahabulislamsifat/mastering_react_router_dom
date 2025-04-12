import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="px-10 ">
      <Navbar
        fluid
        className=" backdrop-blur-2xl bg-white z-50 fixed top-0 left-0 right-0 dark:bg-white/5"
      >
        <NavbarBrand href="/">
          <img
            src="https://www.citypng.com/public/uploads/preview/brown-coffee-cup-logo-design-hd-png-701751694776791z8t9jck4mz.png"
            className="mr-3 h-14  sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Coffee House
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://i.ibb.co.com/GfY1RHmc/IMG-20230928-173333-copy.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm font-semibold">
                Sahabul Islam Sifat
              </span>
              <span className="block truncate text-sm">
                sahabulislamsifat@gmail.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavLink
            className={({ isActive }) =>
              `font-black ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-black ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/coffees"
          >
            Coffees
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-black ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
