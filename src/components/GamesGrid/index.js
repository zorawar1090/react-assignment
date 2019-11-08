import React from 'react'
import request from 'superagent'
import View from './view'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GamesGrid extends React.Component {
  state = {
    games: ""
  }

  componentDidMount() {
    request('https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=1000&__permission_set=Game%20Rankings')
      .set('Authorization', 'Bearer i3BguvgfRQJVcOJ7PZA2L2laymTrp3D6AjHeCwngjP0')
      .then(data => {
        const realData = JSON.parse(data.text)
        this.setState({
          games: realData.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.props.user) {
      if (this.state.games.length > 0) {
        return (
          <React.Fragment>
            <Link className="btn btn--white" to="/search">Go to search</Link>
            <div className="grid-app">
              <View games={this.state.games} />
            </div>
          </React.Fragment>

        )
      }
      else {
        return <div className="loading">Loading...</div>
      }
    }
    else {
      return <div className="u-center-text u-margin-top-medium">
        <h2>Sorry, you are not authorized. <Link className="link__grey" to="/">Click here</Link> to log in.</h2>
      </div>
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.jwt
})

export default connect(mapStateToProps, null)(GamesGrid)