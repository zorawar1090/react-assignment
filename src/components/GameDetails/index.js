import React from 'react'
import request from 'superagent'
import View from './view'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameDetails extends React.Component {
  state = {
    id: "",
    description: "",
    genres: "",
    publishers: "",
    releaseDates: ""
  }

  componentDidMount() {
    const gameTitle = this.props.match.params.name
    request.post('https://api.newzoo.com/v1.0/metadata/noun/search?nouns=game,genre,country&include_aliases=true')
      .set('Authorization', 'Bearer i3BguvgfRQJVcOJ7PZA2L2laymTrp3D6AjHeCwngjP0')
      .send({ search_text: gameTitle })
      .then(data => {
        console.log(data);
        const id = data.body[0].id
        this.setState({
          id: id
        })
        request(`https://api.newzoo.com/v1.0/metadata/game/${this.state.id}?__permission_set=Explorer%20Games`)
          .set('Authorization', 'Bearer i3BguvgfRQJVcOJ7PZA2L2laymTrp3D6AjHeCwngjP0')
          .then(data => {
            console.log('data.body test', data.body)
            const { description, genres, publishers, release_dates } = data.body
            this.setState({
              description: description,
              genres: genres,
              publishers: publishers,
              releaseDates: release_dates
            })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    const { description, genres, publishers, releaseDates } = this.state
    const title = this.props.match.params.name

    if (this.props.user) {
      return <div>
        <View
          title={title}
          description={description}
          genres={genres}
          publishers={publishers}
          releaseDates={releaseDates}
        />
      </div>
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

export default connect(mapStateToProps, null)(GameDetails)