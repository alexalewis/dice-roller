import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    diceResult: 0,
  }
  
  rollDice = () => {
    const result = Math.ceil((Math.random() * 6),
    console.log('Rolling dice', result),
    this.setState({
      diceResult: result,
    })
    console.log(this.state.diceResult)
  } 

  render() {
    return (
      <>
        <section>
          <button onClick={this.rollDice}>Roll Dice</button>
        </section>
        <section>
          <p>You rolled a ({this.state.diceResult})</p>
        </section>
      </>
    )
  }
}

export default App
