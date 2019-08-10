import React, { Component } from 'react'
import MyContext from './MyContext'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

class App extends Component {
  state = {
    page: 1
  }

  advancePage = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  renderCurrentPage = () => {
    switch (this.state.page) {
      case 1:
        return <Page1 />
      case 2:
        return <Page2 />
      case 3:
        return <Page3 />
      case 4:
        return <Page4 />
      case 5:
        return <Page5 />
      default:
        return <Page1 />
    }
  }

  render() {
    return (
      <MyContext.Provider value={this}>
        <div className="App">{this.renderCurrentPage()}</div>
      </MyContext.Provider>
    )
  }
}

export default App
