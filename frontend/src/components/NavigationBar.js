import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Sign</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Sign</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  )
}
