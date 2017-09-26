import React from 'react'
import Card from "./card"
import Counter from "./counter"

class Game extends React.Component {

state = {
  cards : [
    {src: "/Images/doggo1.jpg"},
    {src: "/Images/doggo2.jpg"},
    {src: "/Images/doogo3.jpg"},
    {src: "/Images/dog3.jpg"}
  ]
}

render () {
  return (
  <div className="game" >
  <Card src={this.state.cards[0].src}/>
  <Card src={this.state.cards[1].src}/>
  <Card src={this.state.cards[2].src}/>
  <Card src={this.state.cards[3].src}/>
    </div>
  )
}

}

export default Game
