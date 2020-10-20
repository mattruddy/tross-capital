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
        <Link href="/" passHref>
          <NavLink>
            Home
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/blogs" passHref>
          <NavLink>Blogs</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
)

export default MainNav