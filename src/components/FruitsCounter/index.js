import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state

    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="heading">
            Bob ate
            <span className="count">{mangos}</span> mangoes
            <span className="count"> {bananas}</span> bananas
          </h1>
          <div className="con">
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
