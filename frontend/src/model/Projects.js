import React, { Component } from 'react'
import { Tabs, Tab } from 'react-mdl'

export class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }
  render() {
    return (
      <div className="content">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
          ></Tabs>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>Javascript</Tab>
          <Tab>C#</Tab>
        </div>
      </div>
    )
  }
}
