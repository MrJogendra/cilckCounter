// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  clickMe = () => {
    this.setState(prevState => ({count: prevState + 1}))
  }
  render() {
    const count = this.state
    return (
      <div className="container">
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <div>
          <button className="cilck-btn" type="button" onClick={this.clickMe}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
