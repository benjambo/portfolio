import React from 'react'
import { List, ListItem, ListItemContent } from 'react-mdl'
import contactpic from '../assets/contactpic.jpeg'

export const Contact = () => {
  return (
    <div>
      <div className="contact-body">
        <div className="contact-grid">
          <div className="contact-div">
            <h2 style={{ fontFamily: 'Montserrat' }}>Benjamin Schelling</h2>
            <img
              src={contactpic}
              alt="avatar"
              style={{ height: '30vh', borderRadius: '10px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I’m a 23 year old software engineering student. I have a high
              interest in IT and love working among technology. During my
              studies, I have got to learn Java, JavaScript, ReactJS, SQL, HTML
              and CSS on strong bases and minor knowledge in C and C#. I want to
              start working in an IT company to promote my knowledge and
              experience. I’m determined on developing myself and on learning
              new skills.
            </p>
          </div>
          <div className="contact-div">
            <h2 style={{ fontFamily: 'Montserrat' }}>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List style={{ fontSize: '3vh' }}>
                <ListItem>
                  <ListItemContent
                    icon="contact_phone"
                    style={{ fontSize: '3vh' }}
                  >
                    +358 40 9565771
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="email" style={{ fontSize: '3vh' }}>
                    beni.schelling@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    icon="location_on"
                    style={{ fontSize: '3vh' }}
                  >
                    Helsinki, Finland
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
