import React from 'react'
import axios from 'axios'
import GameRanking from './GameRanking'
import './Ranking.css';

class Ranking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      snake_ranks: [],
      snake_top3: [],
      pong_ranks: [],
      pong_top3: [],
    }
  }

  componentDidMount() {
    // snake
    axios.get('https://j5a104.p.ssafy.io/game/snake/rank')
    .then((Response)=>{
      this.setState({ snake_ranks: Response.data.data})
      let top3 = []
      if (this.state.snake_ranks.length == 1) {
        top3.push({'name': '', 'score': '0'})
        top3.push(this.state.snake_ranks[0])
        top3.push({'name': '', 'score': '0'})
      } else if (this.state.snake_ranks.length == 2) {
        top3.push({'name': '', 'score': '0'})
        top3.push(this.state.snake_ranks[0])
        top3.push(this.state.snake_ranks[1])
      } else if (this.state.snake_ranks.length >= 3) {
        top3.push(this.state.snake_ranks[2])
        top3.push(this.state.snake_ranks[0])
        top3.push(this.state.snake_ranks[1])
      }
      this.setState({ snake_top3: top3})
    }).catch((Error)=>{
        console.log(Error);
    })

    // pong
    axios.get('https://j5a104.p.ssafy.io/game/pong/rank')
    .then((Response)=>{
      this.setState({ pong_ranks: Response.data.data})
      let top3 = []
      if (this.state.pong_ranks.length == 1) {
        top3.push({'name': '', 'score': '0'})
        top3.push(this.state.pong_ranks[0])
        top3.push({'name': '', 'score': '0'})
      } else if (this.state.pong_ranks.length == 2) {
        top3.push({'name': '', 'score': '0'})
        top3.push(this.state.pong_ranks[0])
        top3.push(this.state.pong_ranks[1])
      } else if (this.state.pong_ranks.length >= 3) {
        top3.push(this.state.pong_ranks[2])
        top3.push(this.state.pong_ranks[0])
        top3.push(this.state.pong_ranks[1])
      }
      this.setState({ pong_top3: top3})
    }).catch((Error)=>{
        console.log(Error);
    })
  }

  render() {
    return (
      <div className="rankings">
        <GameRanking 
          game="Snake"
          ranks={this.state.snake_ranks}
          top3={this.state.snake_top3}
        />
        <GameRanking 
          game="PingPong"
          ranks={this.state.pong_ranks}
          top3={this.state.pong_top3}
        />
      </div>
    )
  }
}

export default Ranking