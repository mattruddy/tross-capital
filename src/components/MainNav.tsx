import Link from "next/link"
import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"

const MainNav = () => (
    <Navbar className="bb main-b" fixed="top">
      <Link href="/" passHref>
      <NavbarBrand>
        <div style={{display: "flex", alignItems: "center"}}>
        <img height="55" width="55" src="/logo.png" />
        <h3 style={{fontWeight: "bolder", paddingLeft: "8px", marginBottom: "0"}} className="sec-c">Tross Capital</h3>
        </div>
      </NavbarBrand>
    </Link>
    <Nav>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>About</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/portfolio" passHref>
          <NavLink>
            Portfolio
          </NavLink>
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