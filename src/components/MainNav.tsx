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
          Home
        </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
        <Link href="/about">
          About
        </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
        <Link href="/blogs">
          Blogs
        </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
        <Link href="/contact">
          Contact
        </Link>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default MainNav