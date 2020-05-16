import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: 'smaller',
              }}
              to="/"
            >
              Benjamin Bowo
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 'smaller',
              }}
              to="/"
            >
              My Portfolio
            </Link>
          }
        >
          <Navigation>
            <Link style={{ color: 'black' }} to="/">
              Home
            </Link>
            <Link style={{ color: 'black' }} to="/projects">
              Projects
            </Link>
            <Link style={{ color: 'black' }} to="/contact">
              Contact
            </Link>
            <Link style={{ color: 'black' }} to="/resume">
              Resume
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  )
}