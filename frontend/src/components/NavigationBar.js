import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <Navbar expand="lg" fixed="top" variant="dark" expanded={expanded}>
        <Navbar.Brand>
          <AnchorLink
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            offset="100"
            href="#home"
          >
            Benjamin Schelling
          </AnchorLink>
        </Navbar.Brand>
        <Navbar.Toggle
          area-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setExpanded(false)}>
              <AnchorLink
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                offset="100"
                href="#home"
              >
                Home
              </AnchorLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <AnchorLink
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                offset="100"
                href="#projects"
              >
                Projects
              </AnchorLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <AnchorLink
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                offset="80"
                href="#resume"
              >
                Resume
              </AnchorLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavigationBar
