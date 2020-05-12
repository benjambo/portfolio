import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from 'react-mdl'

export class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* MovieSurfer */}
          <Card shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300) center / cover',
              }}
            >
              MovieSurfer
            </CardTitle>
            <CardText>
              MovieSurfer is a project I did at school with a team. The idea was
              to create a website to gather all movies in different theaters to
              one place. MovieSurfer's goal is to bring the prices down on movie
              tickets and end the monopoly position Finnkino has
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/benjambo/MovieSurfer"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://moviesurfer-app.herokuapp.com"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Perfiction */}
          <Card shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/9186/food-beans-coffee-drink.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover',
              }}
            >
              Perfiction
            </CardTitle>
            <CardText>
              Perfiction is an enthusiastic coffee website where the idea is to
              promote a coffeeshop as a brand and sell their products. This
              project was my first time using React.
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/benjambo/Perfiction"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://perfiction.herokuapp.com/home"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* My Portfolio */}
          <Card shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover',
              }}
            >
              My Portfolio
            </CardTitle>
            <CardText>
              This is a project I created by myself to make myself and portfolio
              of all my work.
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/benjambo/Portfolio"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://benjambo.github.io/Portfolio"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Java</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/* Cup O'Roast */}
          <Card shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover',
              }}
            >
              Cup O'Roast
            </CardTitle>
            <CardText>
              Cup O'Roast is the very first project that I took part in.
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Jepu32/ProjectCoffee"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://users.metropolia.fi/~benjambo/Projekti/Coffee.html"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Unity</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="all-content">
        <div>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>React</Tab>
            <Tab>Java</Tab>
            <Tab>Javascript</Tab>
            <Tab>Unity</Tab>
          </Tabs>

          <Grid className="grid-width">
            <Cell col={12} >
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}