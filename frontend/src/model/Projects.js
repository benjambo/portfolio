import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from 'react-mdl'
//import { Spring } from 'react-spring/renderprops'

export class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Newsy */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover',
              }}
            >
              Newsy
            </CardTitle>
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Newsy is a news website that collects news all around the web and
              brings it in one place. Newsy is powered by NewsAPI
            </CardText>
            <CardActions border>
              <Button target="_blank" href="https://github.com/benjambo/Newsy">
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://benjambo.github.io/Newsy/#/"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Bikester */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover',
              }}
            >
              Bikester
            </CardTitle>
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Bikester is a project created for everyone that use Alepa-fillari.
              It uses an open API to get the information needed and shows it to
              the user.
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/benjambo/BikeApp"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://benjambo.github.io/BikeApp/#/"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* MovieSurfer */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
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
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
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
          <br />

          {/* Cup O'Roast */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
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
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
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
          <br />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {/* iBeet */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover',
              }}
            >
              iBeet
            </CardTitle>
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              iBeet is an Android software built with Android Studio and Java.
              The application is an fitness app that counts your calories based
              on you weight, height and gender and tracks your activity e.g.
              your jogging trip
            </CardText>
            <CardActions border>
              <Button target="_blank" href="https://github.com/benjambo/iBeet">
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://drive.google.com/file/d/1uo0Kev8sFCPjIgD1F6f4zxuuvpxeOXIt/view?usp=sharing"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br />
        </div>
      )
    } /*else if (this.state.activeTab === 2) {
      return (
        <div>
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
            <CardText style={{ color: 'black' }}>
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
    }*/ else if (
      this.state.activeTab === 2
    ) {
      return (
        <div>
          {/* Sumwan The Game */}
          <Card className="cards" shadow={3} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover',
              }}
            >
              Sumwan The Game
            </CardTitle>
            <CardText
              className="card-text"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Sumwan is the first game I was apart of. We built a game using
              Unity and C#. It's an adventure game where you're supposed to find
              Sumwan's (The chraracter's) lost socks in a maze.
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://trello.com/b/BzLJ8w88/sumwans-socks"
              >
                Trello
              </Button>
              <Button
                target="_blank"
                href="https://drive.google.com/open?id=1OKzLJIzBJRLKhQ6Vbz1Wsp1wR-lX65tp"
              >
                Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs
          className="project-tabs"
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab className="tabs">
            <b>React & Javascript</b>
          </Tab>
          <Tab className="tabs">
            <b>Java</b>
          </Tab>
          <Tab className="tabs">
            <b>Unity</b>
          </Tab>
        </Tabs>

        <div className="grid-width">
          <div className="content">{this.toggleCategories()}</div>
        </div>
      </div>
    )
  }
}
