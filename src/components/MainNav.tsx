import Link from "next/link"
import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"

const MainNav = () => (
    <Navbar className="bb main-b" fixed="top">
    <NavbarBrand href="/"><h3 style={{fontWeight: "bolder"}} className="sec-c">Tross Capital</h3></NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink>
        <Link href="/">
          <a>Home</a>
        </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
        <Link href="/about">
          <a>About</a>
        </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default MainNav