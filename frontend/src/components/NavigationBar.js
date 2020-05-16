import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const NavigationBar = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <AnchorLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: 'smaller',
              }}
              offset="100"
              href="#home"
            >
              Benjamin Bowo
            </AnchorLink>
          }
          scroll
        >
          <Navigation>
            <AnchorLink offset="100" href="#home">
              Home
            </AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <AnchorLink href="#resume">Resume</AnchorLink>
          </Navigation>
        </Header>
        <Drawer
          title={
            <AnchorLink
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 'smaller',
              }}
              offset="100"
              href="#home"
            >
              My Portfolio
            </AnchorLink>
          }
        >
          <Navigation>
            <AnchorLink
              offset="100"
              href="#home"
              style={{
                color: 'black',
              }}
            >
              Home
            </AnchorLink>
            <AnchorLink style={{ color: 'black' }} href="#projects">
              Projects
            </AnchorLink>
            <AnchorLink style={{ color: 'black' }} href="#resume">
              Resume
            </AnchorLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  )
}
