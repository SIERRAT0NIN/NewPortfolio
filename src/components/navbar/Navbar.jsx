import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarContainer = () => {
  return (
    <Navbar
      isBlurred
      shouldHideOnScroll
      className="rounded-lg bg-transparent flex justify-center fixed top-0 w-full z-10"
    >
      <NavbarContent className="w-full">
        <div className="w-full flex justify-center">
          <Link to="/work">
            <Button
              variant="flat"
              to="/work"
              className="text-white rounded-tr-none rounded-br-none"
            >
              Work
            </Button>
          </Link>
          <Link to="/education">
            <Button variant="flat" className="text-white rounded-none">
              Education
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="flat" className="text-white rounded-none">
              Projects
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="flat" className="text-white rounded-none">
              About Me
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="flat"
              className="text-white rounded-tl-none rounded-bl-none"
            >
              Contact
            </Button>
          </Link>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarContainer;
