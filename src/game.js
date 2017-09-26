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
  {this.state.cards.map((card) => (
<Card src={card.src}/>
  ))}
    </div>
  )
}

}

export default Game
