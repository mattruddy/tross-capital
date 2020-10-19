import Link from "next/link"
import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"

const MainNav = () => (
    <Navbar className="bb main-b" fixed="top">
    <NavbarBrand href="/">
      <div style={{display: "flex", alignItems: "center"}}>
      <img height="35" src="logo.png" />
      <h3 style={{fontWeight: "bolder", paddingLeft: "8px", marginBottom: "0"}} className="sec-c">Tross Capital</h3>
      </div>
    </NavbarBrand>
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