import React from "react"

class Counter extends React.Component {

  state = {
    count:10
  }
  handleButtonClick = () => {
    this.setState({count: this.state.count - 1 })
  }


render (){
  return (
    <div> Count: {this.state.count}
    <button onClick={this.handleButtonClick}> Add!</button>
    </div>
  )
}

}


export default Counter
