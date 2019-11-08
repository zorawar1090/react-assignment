import React from 'react'
import { Link } from 'react-router-dom'

export default class View extends React.Component {
  render() {
    const { games } = this.props
    const gamesToDisplay = games.slice(0, 51)
    if (games === "") {
      return <div className="loading">Loading...</div>
    }
    else {
      return (
        <React.Fragment>
          <div className="u-center-text">
            <h2 className="heading-secondary games-grid-title">Top 50 streamed games</h2>
          </div>
          <ul className="hs full">
            {gamesToDisplay.map(game => {
              return (
                <li className="item">
                  <Link className="link" to={`game/${game.game}`}>
                    <img src={`https://api-test.newzoo.com/v1.0/metadata/game/boxart?name=${game.game}`} alt={game.game} />
                    <h2 className="u-center-text">{game.game}</h2>
                  </Link>
                </li>
              )
            })}
          </ul>
        </React.Fragment>
      )
    }
  }
}